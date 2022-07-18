import React from "react";
import s from './SideBar.module.css'
import {NavLink} from "react-router-dom";
import {SideBarType} from "../../../redux/state";

type SideBarPropsType = {
    sideBar: SideBarType[]
}

export const SideBar = (props: SideBarPropsType) => {
    return (
        <div className={s.sideBarBlock}>

            {
                props.sideBar.map(m => (
                    <div key={m.id}>
                        <div>{m.name}</div>
                        <img src="https://s1.1zoom.ru/big3/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_3840x2400.jpg" />
                    </div>
                ))
            }
        </div>
    )

}