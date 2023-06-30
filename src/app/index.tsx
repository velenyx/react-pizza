import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import '~/shared/scss/app.scss'

import { store } from '~/app/providers/store/store'
import { CartPage, HomePage, NotFoundPage } from '~/pages'
import FullPizzaCardPage from '~/pages/FullPizzaCardPage/FullPizzaCardPage'
import { Layout } from '~/shared/ui'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/pizza/:id" element={<FullPizzaCardPage />} />
          <Route path="/404" element={<NotFoundPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
)
