import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        /*action: (state,action) => {
            return
        }*/
    }
})

export const userReducer = userSlice.reducer

// export const { action } = userSlice.actions