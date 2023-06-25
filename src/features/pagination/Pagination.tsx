import { FC } from 'react'

import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'

import { useAppDispatch, useAppSelector } from '~/shared/model/hooks'
import { setCurrentPage } from '~/widgets/filter/model/slice'
export const Pagination: FC = () => {
  const dispatch = useAppDispatch()
  const currentPage = useAppSelector(state => state.filter.pageCount)

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={num => dispatch(setCurrentPage(num.selected + 1))}
      pageRangeDisplayed={8}
      pageCount={3}
      forcePage={currentPage - 1}
      renderOnZeroPageCount={null}
    />
  )
}
