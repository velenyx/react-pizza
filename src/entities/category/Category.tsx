import { FC, useState } from 'react'

import { CategoryItem } from '~/entities/category/category-item/CategoryItem'
import { categoriesData } from '~/entities/category/category.data'

const Category: FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)

  return (
    <div className="categories">
      <ul>
        {categoriesData.map((category, index) => (
          <CategoryItem
            setState={setActiveCategoryIndex}
            state={activeCategoryIndex}
            title={category.title}
            id={index}
            key={category.title}
          />
        ))}
      </ul>
    </div>
  )
}

export default Category
