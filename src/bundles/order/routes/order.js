import React from 'react'
import {Route} from 'react-router-dom'
import ConfigurationContainer from "../components/configuration/ConfigurationContainer";
import AddressContainer from "../components/Address/AddressContainer";
import CheckoutContainer from "../components/checkout/CheckoutContainer";
import OrderProvider from "../context/OrderProvider";

export const Paths = {
    configuration: '/configuration',
    address: '/address',
    checkout: '/checkout',
};

export const orderRoutes = (language) => {
    console.log(language);
    return (
        <OrderProvider>
            <Route key="configuration" path={`/${language}${Paths.configuration}`}
                   component={ConfigurationContainer}/>
            <Route key="address" path={`/${language}${Paths.address}`} component={AddressContainer}/>
            <Route key="checkout" path={`/${language}${Paths.checkout}`} component={CheckoutContainer}/>
        </OrderProvider>
    )
};

export default [
    <Route key="configuration" path={Paths.configuration} component={ConfigurationContainer}/>,
    <Route key="address" path={Paths.address} component={AddressContainer}/>,
    <Route key="checkout" path={Paths.checkout} component={CheckoutContainer}/>
]