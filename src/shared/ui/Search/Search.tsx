import { FC, useCallback, useRef, useState } from 'react'

import debounce from 'lodash.debounce'

import styles from './Search.module.scss'

import { useAppDispatch } from '~/shared/model/hooks'
import { setSearchValue } from '~/widgets/filter/model/slice'

export const Search: FC = () => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)

  const updateSearchValue = useCallback(
    debounce(str => {
      dispatch(setSearchValue(str))
    }, 250),
    [],
  )

  const onClickClear = () => {
    dispatch(setSearchValue(''))
    setValue('')
    if (searchRef.current) {
      searchRef.current.focus()
    }
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  return (
    <div className={styles.root__wrapper}>
      <div className={styles.root}>
        <svg className={styles.icon} height="512" viewBox="0 0 512 512" width="512">
          <title />
          <path d="M464,428,339.92,303.9a160.48,160.48,0,0,0,30.72-94.58C370.64,120.37,298.27,48,209.32,48S48,120.37,48,209.32s72.37,161.32,161.32,161.32a160.48,160.48,0,0,0,94.58-30.72L428,464ZM209.32,319.69A110.38,110.38,0,1,1,319.69,209.32,110.5,110.5,0,0,1,209.32,319.69Z" />
        </svg>
        <input
          ref={searchRef}
          value={value}
          onChange={onChangeInput}
          className={styles.input}
          type="text"
          placeholder="Поиск пиццы..."
        />
        {value && (
          <svg onClick={onClickClear} className={styles.clearIcon} height="48" viewBox="0 0 48 48" width="48">
            <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        )}
      </div>
    </div>
  )
}
