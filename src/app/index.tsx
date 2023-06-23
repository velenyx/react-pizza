import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import '~/shared/scss/app.scss'

import { SearchContextComponent } from '~/app/providers/search'
import { store } from '~/app/providers/store/store'
import { CartPage, HomePage, NotFoundPage } from '~/pages'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <SearchContextComponent>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Provider>
    </SearchContextComponent>
  </BrowserRouter>,
)
