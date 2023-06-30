import { createSlice } from '@reduxjs/toolkit'
interface Sort {
  name: string
  sortProperty: string
}

type FilterSliceState = {
  searchValue: string
  category: number
  pageCount: number
  sort: Sort
}

const initialState: FilterSliceState = {
  searchValue: '',
  category: 0,
  pageCount: 1,
  sort: { name: 'популярности', sortProperty: 'rating' },
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue: (state: FilterSliceState, { payload }) => {
      state.searchValue = payload
    },
    setCategory: (state: FilterSliceState, { payload }) => {
      state.category = payload
    },
    setSort: (state: FilterSliceState, { payload }) => {
      state.sort = payload
    },
    setCurrentPage: (state: FilterSliceState, { payload }) => {
      state.pageCount = payload
    },
    setFilters: (state: FilterSliceState, { payload }) => {
      state.pageCount = Number(payload.currentPage)
      state.sort = payload.sort
      state.category = Number(payload.categoryId)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCategory, setSort, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions

export default filterSlice.reducer
