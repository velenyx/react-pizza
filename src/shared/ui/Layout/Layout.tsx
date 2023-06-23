import { FC, PropsWithChildren } from 'react'

import Header from './Header/Header'

export const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">{children}</div>
      </div>
    </div>
  )
}
