import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './slices/homeSlice'
import menuSlice from './slices/menuSlice'

export const store = configureStore({
  reducer: {
    home: homeSlice,
    menu: menuSlice,
  },
})