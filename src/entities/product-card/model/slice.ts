import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { IProductCard } from '~/entities/product-card/ProductCard'

type pizzaSliceState = {
  items: IProductCard[]
  status: Status
}

type Status = 'loading' | 'success' | 'error'

const initialState: pizzaSliceState = {
  items: [],
  status: 'loading',
}

interface fetchPizzasProps {
  sortBy: string
  order: string
  category: string
  search: string
  currentPage: number
}

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async ({ category, order, search, sortBy, currentPage }: fetchPizzasProps) => {
    const { data } = await axios.get(
      `https://6491e2552f2c7ee6c2c9194a.mockapi.io/api/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
    return data as IProductCard[]
  },
)

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems: (state: pizzaSliceState, { payload }) => {
      state.items = payload
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = 'loading'
      state.items = initialState.items
      console.log('Идёт отправка...')
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = 'success'
      state.items = action.payload
    })
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = 'error'
      state.items = initialState.items
      console.log('Произошла ошибка')
    })
  },
})

// Action creators are generated for each case reducer function
export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
