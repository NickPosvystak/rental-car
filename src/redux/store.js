import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./carReducer";


export const store = configureStore({
    reducer: {
        cars: carsReducer
    }
})