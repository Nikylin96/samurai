import {ActionTypes, ProfilePageType, StateType} from "./state";

export type AddPostActionType = ReturnType<typeof addPostAC>
export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>

export type ProfileActionsType = AddPostActionType | ChangeNewTextActionType

const initState:ProfilePageType = {
    posts: [
        {id: 1, title: 'Они получат по заслугам.', likeCounts: 1},
        {id: 2, title: 'Не нужно кланяться!', likeCounts: 5},
        {id: 3, title: 'Во имя правосудия!', likeCounts: 2},
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initState, action:ProfileActionsType):ProfilePageType=> {
    switch (action.type){
        case "ADD-POST":{
            const newPost = {
                id: 5,
                title: state.newPostText,
                likeCounts: 0
            }
            return {...state,newPostText:'',posts: [newPost,...state.posts]}
        }
        case "CHANGE-NEW-TEXT":
            return {...state,newPostText: action.newPostText}
        default:
            return state;
    }
}

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const  //as const чтобы воспринимал весь объект как константу и не ругался тс
}
export const changeNewTextAC = (newPostText: string) => {
    return {
        type: "CHANGE-NEW-TEXT", newPostText: newPostText
    } as const
}

//     if (action.type === 'c') {

//         state.posts.push(newPost)
//         this._state.profilePage.newPostText = ''
//         this._rerenderEntireTree()
//     } else if (action.type === 'CHANGE-NEW-TEXT') {
//         this._state.profilePage.newPostText = action.newPostText
//         this._rerenderEntireTree()
//
//     return state
// }