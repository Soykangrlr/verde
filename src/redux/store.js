import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "./detailSlice";
import postSlice from "./postSlice";

export const store=configureStore({
    reducer:{
        post:postSlice,
        detail:detailSlice
    }
})