import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter/index'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  }) //store the reducer - which handle events