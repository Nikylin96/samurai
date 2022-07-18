import {observe} from "web-vitals/dist/modules/lib/observe";
import {AddPostActionType, ChangeNewTextActionType, ProfileActionsType, profileReducer} from "./ProfileReducer";
import {
    ChangeNewMessageTextActionType,
    DialogsActionTypes,
    dialogsReducer,
    UpdateNewMessageTextActionType
} from "./DialogsReducer";


export type MessageType = {
    id: number
    message: string | undefined
}
export type dialogsType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    title: string
    likeCounts: number
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs: dialogsType[]
    messages: MessageType[]
    newMessageText: string
}
export type SideBarType = {
    name: string
    id: number
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarType[]
}


// export const UppdateNewPostText = (postText:string )=> {
//     state.profilePage.newPostText.push(postText)
//     rerenderEntireTree()
// }


export type StoreType = {
    _state: StateType
    // changeNewText: (newText: string) => void
    // addPost: (postText: string) => void
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}


//Старая версия типизации
//  type AddPostActionType = {
//     type: 'ADD-POST',
// }
// export type ChangeNewTextActionType = {
//     type: 'CHANGE-NEW-TEXT',
//     newPostText: string
// }



export type ActionTypes = AddPostActionType | ChangeNewTextActionType | ChangeNewMessageTextActionType | UpdateNewMessageTextActionType

// export const addPostAC = () => {
//     return {
//         type: "ADD-POST"
//     } as const  //as const чтобы воспринимал весь объект как константу и не ругался тс
// }
// export const changeNewTextAC = (newPostText: string) => {
//     return {
//         type: "CHANGE-NEW-TEXT", newPostText: newPostText
//     } as const
// }
// export const sendMessageTextAC = (newMessageText: string | undefined) => {
//     return {
//         type: "SEND-MESSAGE", newMessageText: newMessageText
//     } as const
// }
// export const updateNewMessageTextAC = () => {
//     return {
//         type: "ADD-MESSAGE-BODY"
//     } as const
// }

export const store: StoreType = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, title: 'Они получат по заслугам.', likeCounts: 1},
                {id: 2, title: 'Не нужно кланяться!', likeCounts: 5},
                {id: 3, title: 'Во имя правосудия!', likeCounts: 2},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sideBar: [
            {id: 1, name: 'Arthas'},
            {id: 2, name: 'Anduin'},
            {id: 3, name: 'Thrall'}
        ]
    },
    // changeNewText(newPostText: string) {
    //     this._state.profilePage.newPostText = newPostText
    //     this._rerenderEntireTree()
    // },
    // addPost(postText: string) {
    //     const newPost = {
    //         id: 5,
    //         title: this._state.profilePage.newPostText,
    //         likeCounts: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._rerenderEntireTree()
    // }, // не нужны , так как они теперь в dispatch-e


    _rerenderEntireTree() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action as ProfileActionsType)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action as DialogsActionTypes)
        this._rerenderEntireTree()


        //стэйт до редьюсера
        // if (action.type === 'ADD-POST') {
        //     const newPost = {
        //         id: 5,
        //         title: this._state.profilePage.newPostText,
        //         likeCounts: 0
        //     }
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = ''
        //     this._rerenderEntireTree()
        // } else if (action.type === 'CHANGE-NEW-TEXT') {
        //     this._state.profilePage.newPostText = action.newPostText
        //     this._rerenderEntireTree()
        // } else if (action.type === "ADD-MESSAGE-BODY") {
        //     this._state.dialogsPage.newMessageText = action.type
        //     // this._state.dialogsPage.messages.push({id:6, , message:body})
        //     this._rerenderEntireTree()
        // }else if (action.type === "SEND-MESSAGE") {
        //     debugger
        //     // let body = this._state.dialogsPage.newMessageText
        //     let body = action.newMessageText
        //     this._state.dialogsPage.newMessageText = ''
        //     this._state.dialogsPage.messages.push({id:6, message:body})
        //     this._rerenderEntireTree()
        // }
    }
}


