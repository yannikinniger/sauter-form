import React from 'react'
import routes from './routes/order'
import OrderProvider from './context/OrderProvider'

export default () => {
    return (
        <OrderProvider>
            {routes}
        </OrderProvider>
    )
}