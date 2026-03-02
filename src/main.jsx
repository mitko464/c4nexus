import './reset.css'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { ProductProvider } from './context/ProductContext.jsx'
import { FiltersProvider } from './context/FiltersContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <ProductProvider>
                <FiltersProvider>
                    <App />
                </FiltersProvider>
            </ProductProvider>
        </BrowserRouter>
    </StrictMode>

)
