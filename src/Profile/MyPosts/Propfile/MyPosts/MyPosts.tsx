import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "../../Post/Post";
import {ActionTypes, ProfilePageType} from "../../../../redux/state";
import {addPostAC, changeNewTextAC} from "../../../../redux/ProfileReducer";

type MyPostsType = {
    profilePage: ProfilePageType
    // addPost: (postText: string) => void
    // changeNewTextCallBack:(newPostText:string)=>void
    dispatch: (action: ActionTypes) => void

}

export const MyPosts = (props: MyPostsType) => {
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
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.profilePage.newPostText} onChange={onChangeHandler}/>
                </div>
                <button onClick={onClickHandler}>add post</button>
            </div>
            <div className={s.posts}>
                {
                    props.profilePage.posts.map((post) => <Post title={post.title} likeCounts={post.likeCounts}/>)
                }
            </div>
        </div>
    )
}