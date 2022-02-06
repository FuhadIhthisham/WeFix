import { configureStore } from '@reduxjs/toolkit'
import workerDetailsReducer from './workerDetails/workerDetails'

export default configureStore({
    reducer: {
        workerDetails: workerDetailsReducer
    }
})