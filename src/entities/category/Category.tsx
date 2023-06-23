import { FC } from 'react'

import { categoriesData } from '~/entities/category/category.data'

const Category: FC<any> = ({ value, onClickCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categoriesData.map((categoryName, index) => (
          <li
            className={value === index ? 'active' : ''}
            onClick={() => onClickCategory(index)}
            key={categoryName.title}>
            {categoryName.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category
