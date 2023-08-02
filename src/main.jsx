import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider, User } from '@auth0/auth0-react'
import './index.css'
import App from './App.jsx'
import { ProductsProvider } from './context/products_context'
import { UserProvider } from './context/user_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'

//dev-ewam0zebtlhs3rvy.us.auth0.com
//NGREERKcLwTlJzK6Sfz7yPwYPly0VNIf

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Auth0Provider
            domain={import.meta.env.VITE_REACT_AUTH_DOMAIN}
            clientId={import.meta.env.VITE_REACT_AUTH_CLIENT}
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
            <UserProvider>
                <ProductsProvider>
                    <FilterProvider>
                        <CartProvider>
                            <App />
                        </CartProvider>
                    </FilterProvider>
                </ProductsProvider>
            </UserProvider>
        </Auth0Provider>
    </React.StrictMode>
)
