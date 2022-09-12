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
        objectivesAdded: (state, { payload }) => {
            const existingPost = state.journals.find(journal => journal.userId === payload.userId)
            if (!existingPost.objectives) {
                existingPost.objectives = []
            }
            const newObjectives = existingPost.objectives.concat(payload.updatedContent)
            existingPost.objectives = newObjectives
        },
        genPlantationJourIncludes: (state, { payload }) => {
            const existingJournal = state.journals.find(journal => journal.userId === payload.userId)
            if (!existingJournal.genPlantationJourIncludes) {
                existingJournal.genPlantationJourIncludes = []
            }
            const newGenPlantationJourIncludes = existingJournal.genPlantationJourIncludes.concat(payload.updatedContent)
            existingJournal.genPlantationJourIncludes = newGenPlantationJourIncludes
        }
    }
})

export const selectAllJournals = store => store.journals.journals
export const { prefaceAdded, plantationJournalAdded, objectivesAdd, objectivesAdded, genPlantationJourIncludes } = journalsSlice.actions
export default journalsSlice.reducer

