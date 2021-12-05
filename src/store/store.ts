import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import todoRecducer from './slices/todoSlice'

export const store = configureStore({
  reducer: {
    todo: todoRecducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
