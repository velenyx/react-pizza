import { useContext, useEffect, useState } from 'react'

import { SearchContext } from '~/app/providers/search'
import Category from '~/entities/category/Category'
import ProductCard, { IProductCard } from '~/entities/product-card/ProductCard'
import Sort from '~/entities/sort/Sort'
import { Pagination } from '~/features/pagination/Pagination'
import { useAppSelector } from '~/shared/model/hooks'
import { Layout, Skeleton } from '~/shared/ui'

export function HomePage() {
  const categoryId = useAppSelector(state => state.filter.category)
  const sortRedux = useAppSelector(state => state.filter.sort)
  const { searchValue } = useContext(SearchContext)
  const [items, setItems] = useState<IProductCard[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setIsLoading(true)
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const sortBy = sortRedux.sortProperty.replace('-', '')
    const order = sortRedux.sortProperty.includes('-') ? 'asc' : 'desc'
    const search = searchValue ? `&search=${searchValue}` : ''

    fetch(
      `https://6491e2552f2c7ee6c2c9194a.mockapi.io/api/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then(async data => await data.json())
      .then(data => {
        setItems(data)
        setIsLoading(false)
      })

    window.scrollTo(0, 0)
  }, [categoryId, sortRedux, currentPage, searchValue])
  return (
    <Layout>
      <div className="content__top">
        <Category />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? Array.from({ length: 12 }, (_, index) => <Skeleton key={index} />)
          : items.map(product => <ProductCard {...product} key={product.id} />)}
      </div>
      <Pagination onChangePage={setCurrentPage} />
    </Layout>
  )
}
