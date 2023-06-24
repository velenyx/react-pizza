import { FC, useContext } from 'react'

import styles from './Search.module.scss'

import { SearchContext } from '~/app/providers/search'

export const Search: FC = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext)
  return (
    <div className={styles.root__wrapper}>
      <div className={styles.root}>
        <svg className={styles.icon} height="512" viewBox="0 0 512 512" width="512">
          <title />
          <path d="M464,428,339.92,303.9a160.48,160.48,0,0,0,30.72-94.58C370.64,120.37,298.27,48,209.32,48S48,120.37,48,209.32s72.37,161.32,161.32,161.32a160.48,160.48,0,0,0,94.58-30.72L428,464ZM209.32,319.69A110.38,110.38,0,1,1,319.69,209.32,110.5,110.5,0,0,1,209.32,319.69Z" />
        </svg>
        <input
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          className={styles.input}
          type="text"
          placeholder="Поиск пиццы..."
        />
        {searchValue && (
          <svg
            onClick={() => setSearchValue('')}
            className={styles.clearIcon}
            height="48"
            viewBox="0 0 48 48"
            width="48">
            <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        )}
      </div>
    </div>
  )
}
