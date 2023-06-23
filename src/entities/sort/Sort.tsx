import { FC } from 'react'

import cn from 'clsx'

import { useOutside } from '~/shared/lib/hooks/useOutside'
const Sort: FC<any> = ({ value, onClickSort }) => {
  const sortList = [
    { name: 'популярности (DESC)', sortProperty: 'rating' },
    { name: 'популярности (ASC)', sortProperty: '-rating' },
    { name: 'цене (DESC)', sortProperty: 'price' },
    { name: 'цене (ASC)', sortProperty: '-price' },
    { name: 'алфавиту (DESC)', sortProperty: 'title' },
    { name: 'алфавиту (ASC)', sortProperty: '-title' },
  ]

  const { isShow, ref, setIsShow } = useOutside(false)

  const rotateSvg = isShow ? 'rotate(180)' : ''
  return (
    <div className="sort" ref={ref}>
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          transform={rotateSvg}
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>
          <div>Сортировка</div>по:
        </b>
        <span onClick={() => setIsShow(!isShow)}>{value.name}</span>
      </div>
      <div className={cn('sort__popup', { ['sort__popup__active']: isShow })}>
        <ul>
          {sortList.map((sort, index) => (
            <li
              key={sort.name}
              className={value.sortProperty === sort.sortProperty ? 'active' : ''}
              onClick={() => {
                onClickSort(sort)
                setIsShow(!isShow)
              }}>
              {sort.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sort
