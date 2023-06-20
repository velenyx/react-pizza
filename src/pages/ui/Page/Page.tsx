import Category from '~/entities/category/Category'
import ProductCard from '~/entities/product-card/ProductCard'
import { productData } from '~/entities/product-card/products.data'
import Sort from '~/entities/sort/Sort'
import Header from '~/widgets/Header/Header'

export function HomePage() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Category />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {productData.map(product => (
              <ProductCard {...product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
