import { createSlice } from '@reduxjs/toolkit'

export const userDetailSlice = createSlice({
    name: 'userDetails',
    initialState: {
        user: null
    },
    reducers: {
        add_user: (state, action) => {
            state.user = action.payload
        },
        logout_user: (state, action) => {
            state.user= null
        }

    }
})

export const { add_user } = userDetailSlice.actions

export const selectUser = (state) => state.user.user

export default userDetailSlice.reducer