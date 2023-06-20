import ReactDOM from 'react-dom/client'
import '~/shared/scss/app.scss'

import { HomePage } from '~/pages'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<HomePage />)
