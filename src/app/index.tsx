import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import '~/shared/scss/app.scss'

import { SearchContextComponent } from '~/app/providers/search'
import { CartPage, HomePage, NotFoundPage } from '~/pages'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <SearchContextComponent>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </SearchContextComponent>
  </BrowserRouter>,
)
