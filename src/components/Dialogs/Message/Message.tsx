import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type MessagePropsType = {
    message: string
}

export const Message = (props:MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}