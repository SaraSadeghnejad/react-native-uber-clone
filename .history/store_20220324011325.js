import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/navSlice'

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
})