import { configureStore } from '@reduxjs/toolkit'
import userDetailsReducer from './userDetails/userDetailsSlice'

export default configureStore({
    reducer: {
        userDetails: userDetailsReducer
    }
})