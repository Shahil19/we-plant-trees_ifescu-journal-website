import { createSlice } from "@reduxjs/toolkit";
import { contentLists } from "../../contentLists";


const initialState = {
    contentStatus: 'idle',
    contents: contentLists
}
const contentSlice = createSlice({
    name: 'contents',
    initialState,
    reducers: {}
})

export const selectAllContents = store => store.contents
export default contentSlice.reducer