import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}