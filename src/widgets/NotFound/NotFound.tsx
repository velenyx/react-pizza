import { FC } from 'react'

import styles from './NotFound.module.scss'

import { Layout } from '~/shared/ui'

export const NotFound: FC = () => {
  return (
    <Layout>
      <div className={styles.root}>
        <span className={styles.smile}>😕</span>
        <br />
        <h1>Ничего не найдено </h1>
        <p className={styles.description}>К сожалению данная страница остутствует на нашем сайте</p>
      </div>
    </Layout>
  )
}
