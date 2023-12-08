import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style/index.scss'
import LeoProvider from './wallet/LeoProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <LeoProvider>
      <App />
    </LeoProvider>
)
