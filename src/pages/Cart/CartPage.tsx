import { FC } from 'react'

import { Layout } from '~/shared/ui'
import { Cart } from '~/widgets/Cart/Cart'

export const CartPage: FC = () => {
  return (
    <Layout>
      <Cart />
    </Layout>
  )
}
