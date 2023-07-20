import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ProductsProvider>
            <FilterProvider>
                <App />
            </FilterProvider>
        </ProductsProvider>
    </React.StrictMode>
)
