import { configureStore } from "@reduxjs/toolkit";
import subsReducer from "../reducer/subsReducer";

const store = configureStore({
    reducer : {
        subs : subsReducer,
    }
})

export default store;