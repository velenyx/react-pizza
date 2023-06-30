import { combineReducers } from '@reduxjs/toolkit'

import { pizzaSlice } from '~/entities/product-card/model/slice'
import { cartSlice } from '~/widgets/Cart/model/slice'
import { filterSlice } from '~/widgets/filter/model/slice'

export const rootReducer = combineReducers({
  [filterSlice.name]: filterSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
  [pizzaSlice.name]: pizzaSlice.reducer,
})
