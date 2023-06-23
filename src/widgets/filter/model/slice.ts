import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: 0,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<any>) => {
      state.category = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCategory } = filterSlice.actions

export default filterSlice.reducer
