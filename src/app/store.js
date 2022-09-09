import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../features/contents/contentSlice";
import journalsReducer from "../features/journals/journalsSlice";

export const store = configureStore({
    reducer: {
        contents: contentReducer,
        journals: journalsReducer
    }
})