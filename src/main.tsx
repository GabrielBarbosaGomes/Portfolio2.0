import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from './pages/Home'
import { ParallaxProvider } from 'react-scroll-parallax'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ParallaxProvider>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </ParallaxProvider>
  
)
