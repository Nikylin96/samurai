import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export let store = createStore(reducers)

export type AppRootStateType = ReturnType<typeof reducers>