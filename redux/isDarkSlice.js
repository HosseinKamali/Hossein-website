import { createSlice } from "@reduxjs/toolkit";

const isDarkSlice = createSlice({
    name : "isDark",
    initialState:{
        dark : false
    },
    reducers:{
        handleDark :(state)=>{
          state.dark=!state.dark
        }
    }
})

export const {handleDark} = isDarkSlice.actions

export default isDarkSlice.reducer