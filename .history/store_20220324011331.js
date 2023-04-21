import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/nav/navSlice'

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
})