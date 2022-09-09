import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    journalStatus: 'idle',
    journals: [{ userId: 1 }, { userId: 2 }]
}

const journalsSlice = createSlice({
    name: 'journals',
    initialState,
    reducers: {
        prefaceAdded: (state, { payload }) => {
            const existingPost = state.journals.find(journal => journal.userId === payload.userId)
            existingPost.preface = payload.updatedContent
        },
        plantationJournalAdded: (state, { payload }) => {
            const existingPost = state.journals.find(journal => journal.userId === payload.userId)
            existingPost.plantationJournal = payload.updatedContent
        },
    }
})

export const selectAllJournals = store => store.journals.journals
export const { prefaceAdded, plantationJournalAdded } = journalsSlice.actions
export default journalsSlice.reducer

