import { combineReducers, configureStore } from "@reduxjs/toolkit";
import artworkReducer from './slices/artworkSlice';

const rootReducer = combineReducers({
    artwork: artworkReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})