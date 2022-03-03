import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./Profile/MyPosts/Propfile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Settings} from "./components/Music/Settings";
import {Music} from "./components/Settings/Music";


const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/dialogs' element={<Dialogs/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>

        </div>

    );
}


export default App;
