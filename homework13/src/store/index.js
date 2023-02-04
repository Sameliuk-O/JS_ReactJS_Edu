import {combineReducers, configureStore} from "@reduxjs/toolkit";
import stories from "./stories";


const rootReducer = combineReducers({
    stories: stories,

})


export const store = configureStore({
    reducer: rootReducer
})

