import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../feature/counter/index'

export const store = configureStore({
  reducer: {
    counter: counterSlice
  },
})