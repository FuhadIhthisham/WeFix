import { createSlice } from '@reduxjs/toolkit'

export const workerDetailSlice = createSlice({
    name: 'workerDetails',
    initialState: {
        worker: null
    },
    reducers: {
        add_worker: (state, action) => {
            state.worker = action.payload
        }
    }
})

export const { add_worker } = workerDetailSlice.actions

export const selectWorker = (state) => state.worker.worker

export default workerDetailSlice.reducer