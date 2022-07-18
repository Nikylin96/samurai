import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "../../Post/Post";
import {ActionTypes, ProfilePageType} from "../../../../redux/state";
import {addPostAC, changeNewTextAC} from "../../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";

type MyPostsType = {
    profilePage: ProfilePageType
    // addPost: (postText: string) => void
    // changeNewTextCallBack:(newPostText:string)=>void
    dispatch: (action: ActionTypes) => void

}

export const MyPostsContainer = (props: MyPostsType) => {
    debugger
    const onClickHandler = () => {
        // props.addPost(props.profilePage.newPostText)
        props.dispatch(addPostAC())
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.dispatch(e.currentTarget.value)
        // props.dispatch({type: 'CHANGE-NEW-TEXT', newPostText: 'text'})
        props.dispatch(changeNewTextAC(e.currentTarget.value))
    }


    return (
        <div className={s.postBlock}>
            <MyPosts profilePage={} dispatch={}/>
        </div>
    )
}