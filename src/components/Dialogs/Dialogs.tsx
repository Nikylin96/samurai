import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionTypes, dialogsType, MessageType} from "../../redux/state";
import {sendMessageTextAC, updateNewMessageTextAC} from "../../redux/DialogsReducer";

type DialogsProps = {
    dialogs: Array<dialogsType>
    messages: Array<MessageType>
    dispatch: (action: ActionTypes) => void
    newMessageText: string
}

export const Dialogs = (props: DialogsProps) => {

    const postMessageRef = React.createRef<HTMLTextAreaElement>()
    const onClickHandler = ()=> {debugger
        props.dispatch(sendMessageTextAC())
        // alert(postMessageRef.current?.value)
    }
    let dialogsElements =  props.dialogs.map(dialog =><DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.messages.map(message =><Message message={message.message}/>)
    // let newMessageBody = props.messages



    return (
        <div className={s.dialogsBlock}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>

                <span> <textarea placeholder={'введите сообщение'}
                                 onChange={(e)=>{props.dispatch(updateNewMessageTextAC(e.currentTarget.value))}}
                                 value={props.newMessageText} >
                </textarea>
                    <button onClick={onClickHandler}>add message</button>
                </span>
            </div>
        </div>
    )
}

