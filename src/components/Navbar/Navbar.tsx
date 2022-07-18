import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {SideBar} from "./sideBar/SideBar";
import {SideBarType} from "../../redux/state";

type PropsType = {
    sideBar: SideBarType[]
}

export const Navbar = (props: PropsType) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to='profile' className={s.activeLink}>Profile</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" className={s.activeLink}>Dialogs</NavLink></div>
            <div className={s.item}><NavLink to="/news" className={s.activeLink}>News</NavLink></div>
            <div className={s.item}><NavLink to="/music" className={s.activeLink}>Music</NavLink></div>
            <div className={s.item}><NavLink to="/settings" className={s.activeLink}>Settings</NavLink></div>
            <SideBar sideBar={props.sideBar}/>
        </nav>
    )
}