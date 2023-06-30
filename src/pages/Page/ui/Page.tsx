import { useEffect, useRef } from 'react'

import { parse, stringify } from 'qs'
import { useNavigate } from 'react-router-dom'

import Category from '~/entities/category/Category'
import { fetchPizzas } from '~/entities/product-card/model/slice'
import ProductCard from '~/entities/product-card/ProductCard'
import Sort, { sortList } from '~/entities/sort/Sort'
import { Pagination } from '~/features/pagination/Pagination'
import { useAppDispatch, useAppSelector } from '~/shared/model/hooks'
import { Skeleton } from '~/shared/ui'
import { setFilters } from '~/widgets/filter/model/slice'

export const HomePage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const isSearch = useRef(false)
  const isMounted = useRef(false)

  const {
    category: categoryId,
    pageCount: currentPage,
    sort: sortRedux,
    searchValue,
  } = useAppSelector(state => state.filter)
  const { items, status } = useAppSelector(state => state.pizza)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (window.location.search) {
      const params = parse(window.location.search.substring(1))

      const sort = sortList.find(obj => obj.sortProperty === params.sortProperty)

      dispatch(setFilters({ ...params, sort }))
      isSearch.current = true
    }
  }, [])

  useEffect(() => {
    if (isMounted.current) {
      const queryString = stringify({
        sortProperty: sortRedux.sortProperty,
        categoryId,
        currentPage,
      })

      navigate(`?${queryString}`)
    }
    isMounted.current = true
  }, [categoryId, sortRedux, currentPage, searchValue])

  const getPizzas = () => {
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const sortBy = sortRedux.sortProperty.replace('-', '')
    const order = sortRedux.sortProperty.includes('-') ? 'asc' : 'desc'
    const search = searchValue ? `&search=${searchValue}` : ''

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage,
      }),
    )
  }

  useEffect(() => {
    if (!isSearch.current) {
      getPizzas()
    }

    isSearch.current = false
  }, [categoryId, sortRedux, currentPage, searchValue, isSearch])
  return (
    <>
      <div className="content__top">
        <Category />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === 'loading' ? (
          Array.from({ length: 12 }, (_, index) => <Skeleton key={index} />)
        ) : status === 'error' ? (
          <h2 className="content__error_info">
            К сожалению произошла какая-то ошибка, попробуйте повторить запрос позже
          </h2>
        ) : (
          items.map(product => <ProductCard {...product} key={product.id} />)
        )}
      </div>
      <Pagination />
    </>
  )
}
