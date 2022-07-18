import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>
                <img src="https://s1.1zoom.ru/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg" />
                {props.name}</NavLink>
        </div>
    )
}