import { createSlice } from '@reduxjs/toolkit'

import { IProductCard } from '~/entities/product-card/ProductCard'

export interface IItem extends Omit<IProductCard, 'types' | 'sizes'> {
  count: number
  type: string
  size: number
}

type CartSliceState = {
  totalPrice: number
  items: IItem[]
}

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state: CartSliceState, { payload }) => {
      const findItem = state.items.find(obj => obj.id === payload.id)

      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...payload,
          count: 1,
        })
      }

      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
    },
    minusItem: (state: CartSliceState, { payload }) => {
      const findItem = state.items.find(obj => obj.id === payload.id)
      if (findItem) {
        findItem.count--
      }

      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
    },
    removeItem: (state: CartSliceState, { payload }) => {
      console.log(payload)
      state.items = state.items.filter(obj => obj.id !== payload.id)

      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
    },
    clearItems: (state: CartSliceState) => {
      state.items = initialState.items
      state.totalPrice = initialState.totalPrice
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions

export default cartSlice.reducer
