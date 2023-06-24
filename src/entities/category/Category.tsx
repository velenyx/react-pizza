import { FC } from 'react'

import { categoriesData } from '~/entities/category/category.data'
import { useAppDispatch, useAppSelector } from '~/shared/model/hooks'
import { setCategory } from '~/widgets/filter/model/slice'

const Category: FC<any> = () => {
  const category = useAppSelector(state => state.filter.category)
  const dispatch = useAppDispatch()
  return (
    <div className="categories">
      <ul>
        {categoriesData.map((categoryName, index) => (
          <li
            className={category === index ? 'active' : ''}
            onClick={() => dispatch(setCategory(index))}
            key={categoryName.title}>
            {categoryName.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category
