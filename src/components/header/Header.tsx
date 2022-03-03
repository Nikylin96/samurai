import React from "react";
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://w7.pngwing.com/pngs/371/354/png-transparent-world-of-warcraft-cataclysm-world-of-warcraft-mists-of-pandaria-computer-icons-runes-of-magic-everquest-level-up-logo-video-game-rpg.png"
                alt="logo img"/>
        </header>
    )
}