import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../features/contents/contentSlice";

export const store = configureStore({
    reducer: {
        contents: contentReducer
    }
})