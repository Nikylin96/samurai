import React from "react";
import s from './Post.module.css'

type MyPostsPropsType = {
    title: string
    likeCounts: number
}

export const Post = (props: MyPostsPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://i.imgur.com/kabomJy.png" alt="artas"/>
            {props.title}
            <div>like {props.likeCounts}</div>
        </div>
    )
}