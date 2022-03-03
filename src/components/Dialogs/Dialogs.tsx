import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./Dialog/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Arthas'},
        {id: 2, name: 'Anduin'},
        {id: 3, name: 'Varian'},
        {id: 4, name: 'Thrall'}
    ]
    let messagesData = [
        {message: 'Hi'},
        {message: 'For the alliance'},
        {message: 'Into battle'},
        {message: 'For the horde'}
    ]

    return (
        <div className={s.dialogsBlock}>
            <div className={s.dialogsItems}>
                {
                    dialogsData.map(dialog =>
                        <DialogItem name={dialog.name}
                                    id={dialog.id}/>
                    )
                }

            </div>
            <div className={s.messages}>
                {
                    messagesData.map(message =>
                        <Message message={message.message}/>
                    )
                }
            </div>
        </div>
    )
}

