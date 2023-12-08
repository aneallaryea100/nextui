import { combineReducers, configureStore } from "@reduxjs/toolkit";
import artworkReducer from './slices/artworkSlice';
import previousPageReducer from "./slices/previousPageSlice";


const rootReducer = combineReducers({
    artwork: artworkReducer,
    previousPage: previousPageReducer,
})

 export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})
