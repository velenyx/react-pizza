import { Dispatch, FC, SetStateAction } from 'react'

import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'
export const Pagination: FC<{ onChangePage: Dispatch<SetStateAction<number>> }> = ({ onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={num => onChangePage(num.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  )
}
