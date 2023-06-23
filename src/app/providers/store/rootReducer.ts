import { combineReducers } from '@reduxjs/toolkit'

import { filterSlice } from '~/widgets/filter/model/slice'

export const rootReducer = combineReducers({
  [filterSlice.name]: filterSlice.reducer,
})
