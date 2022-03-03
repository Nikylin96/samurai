import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://logos-download.com/wp-content/uploads/2016/02/World_of_Warcraft_logo.jpg"
                     alt="logo" className={s.imgWidth}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}