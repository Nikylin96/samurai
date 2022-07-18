import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostsType, ProfilePageType} from "../../../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    // addPost: (postText:string) => void
    // changeNewTextCallBack:(newPostText: string)=>void
    dispatch: (action: ActionTypes) => void
}


export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} dispatch={props.dispatch}/>
        </div>
    )
}