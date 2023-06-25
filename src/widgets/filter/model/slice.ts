import { createSlice } from '@reduxjs/toolkit'
interface Sort {
  name: string
  sortProperty: string
}

type FilterSliceState = {
  category: number
  pageCount: number
  sort: Sort
}

const initialState: FilterSliceState = {
  category: 0,
  pageCount: 1,
  sort: { name: 'популярности', sortProperty: 'rating' },
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state: FilterSliceState, { payload }) => {
      state.category = payload
    },
    setSort: (state: FilterSliceState, { payload }) => {
      state.sort = payload
    },
    setCurrentPage: (state: FilterSliceState, { payload }) => {
      state.pageCount = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCategory, setSort, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer
