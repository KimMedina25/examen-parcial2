import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider } from 'react-router-dom'
import router from './pages/Routers'
import { registerSW } from 'virtual:pwa-register'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

registerSW({
  onNeedRefresh() {},
  onOfflineReady() {}
})