import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import userDataReducer from "../pages/user/UserSlice"


// import counterReducer from "../features/counter/counterSlice"

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
  },
  devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
