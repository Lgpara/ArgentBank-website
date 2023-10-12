import { createSlice } from "@reduxjs/toolkit"

const userDataInitialState = {}

export const userDataSlice = createSlice({
  name: "userData",
  initialState: userDataInitialState,
  reducers: {
    sendStore: (state, action) => {
      return action.payload
    },
  },
})


export const { sendStore } = userDataSlice.actions

export default userDataSlice.reducer
