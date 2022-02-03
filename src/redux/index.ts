import { configureStore } from "@reduxjs/toolkit";
import {rootReducer} from "./reducers";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch; 

export const store = configureStore({
    reducer: rootReducer,
})