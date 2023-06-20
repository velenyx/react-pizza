import { Dispatch, FC, SetStateAction } from 'react'

export const CategoryItem: FC<{
  title: string
  id: number
  state: number
  setState: Dispatch<SetStateAction<number>>
}> = ({ id, title, setState, state }) => {
  return (
    <li className={state === id ? 'active' : ''} onClick={() => setState(id)}>
      {title}
    </li>
  )
}
