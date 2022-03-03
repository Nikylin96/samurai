import React from "react";
import s from './MyPosts.module.css'
import {Post} from "../../Post/Post";

export const MyPosts = () => {
    let postsData = [
        {title: 'Они получат по заслугам.', likeCounts: 1},
        {title: 'Не нужно кланяться!', likeCounts: 5},
        {title: 'Во имя правосудия!', likeCounts: 2},
    ]

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>add post</button>
            </div>
            <div className={s.posts}>
                {
                    postsData.map(post =>
                        <Post title={post.title} likeCounts={post.likeCounts}/>
                    )
                }
            </div>
        </div>
    )
}