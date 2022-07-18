import React from 'react';
import reportWebVitals from './reportWebVitals';
import {store, AppRootStateType} from "./redux/reduxStore";
import {StateType} from './redux/state'
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App
                // store={store._state}
                // dispatch={store.dispatch.bind(store)}
                // posts={state.posts}
                //  dialogs={dialogs}
                //  messages={messages}
            />
            </Provider>
        </BrowserRouter>
        , document.getElementById('root'))
}


rerenderEntireTree(store._state)
store.subscribe(() => rerenderEntireTree(store._state))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
