import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './counterSlice'
import  userSlice  from './userSlice'
import isDarkSlice from './isDarkSlice'

export const store = configureStore({
  reducer: {
    counter:counterSlice,
    rita:userSlice,
    isDark :isDarkSlice
  },
})