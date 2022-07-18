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
import {ActionTypes, StateType, store} from "./redux/state";

type AppType = {
    store: StateType
    // addPost: (postText: string) => void
    // changeNewText: (newPostText: string) => void
    dispatch: (action: ActionTypes) => void
}

const App: React.FC = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar sideBar={props.store.sideBar}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile'
                           element={<Profile profilePage={props.store.profilePage} dispatch={props.dispatch}/>}
                    />
                    <Route path='/dialogs/*' element={<Dialogs
                        newMessageText = {props.store.dialogsPage.newMessageText}
                        dialogs={props.store.dialogsPage.dialogs}
                                                               messages={props.store.dialogsPage.messages}
                                                               dispatch={props.dispatch}
                    />}/>

                    {/*<Route path='/news' element={<News/>}/>*/}
                    {/*<Route path='/music' element={<Music/>}/>*/}
                    {/*<Route path='/settings' element={<Settings/>}/>*/}
                </Routes>
            </div>

        </div>

    );
}


export default App;
// posts={state.profilePage.posts}