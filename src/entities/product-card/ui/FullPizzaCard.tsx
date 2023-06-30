import { FC, useEffect, useState } from 'react'

import axios from 'axios'
import { useParams } from 'react-router-dom'

import { IProductCard } from '~/entities/product-card/ProductCard'

export const FullPizzaCard: FC = () => {
  const { id } = useParams()
  const [pizza, setPizza] = useState<IProductCard>()

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`https://6491e2552f2c7ee6c2c9194a.mockapi.io/api/items/${id}`)
        setPizza(data)
      } catch (error) {
        alert(error)
      }
    }

    fetchData()
  }, [])

  if (!pizza) {
    return <h1>Загрузка....</h1>
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h1>{pizza?.title}</h1>
    </div>
  )
}
