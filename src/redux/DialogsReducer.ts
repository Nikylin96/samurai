import {DialogsPageType, StateType} from "./state";

export type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>
export type ChangeNewMessageTextActionType = ReturnType<typeof sendMessageTextAC>

export type DialogsActionTypes = UpdateNewMessageTextActionType | ChangeNewMessageTextActionType

const initState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Arthas'},
        {id: 2, name: 'Anduin'},
        {id: 3, name: 'Varian'},
        {id: 4, name: 'Thrall'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'For the alliance'},
        {id: 3, message: 'Into battle'},
        {id: 4, message: 'For the horde'}
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initState, action: DialogsActionTypes): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE-BODY":
            state.newMessageText = action.newMessageText
            // this._state.dialogsPage.messages.push({id:6, , message:body})
            // this._rerenderEntireTree()
            return state;
        case "SEND-MESSAGE":
            let body = state.newMessageText
            state.newMessageText = ''
            state.messages.push({id: 6, message: body})
            // this._rerenderEntireTree()
            return state
        default:
            return state
    }
}
export const sendMessageTextAC = () => {
    return {
        type: "SEND-MESSAGE"
    } as const
}
export const updateNewMessageTextAC = (newMessageText: string) => {
    return {
        type: "ADD-MESSAGE-BODY", newMessageText: newMessageText
    } as const
}