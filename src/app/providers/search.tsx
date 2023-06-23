import { FC, PropsWithChildren, createContext, useState } from 'react'
export const SearchContext = createContext<any>({})

export const SearchContextComponent: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [searchValue, setSearchValue] = useState('')
  return <SearchContext.Provider value={{ searchValue, setSearchValue }}>{children}</SearchContext.Provider>
}
