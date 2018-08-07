import React from 'react'
import {Route} from 'react-router-dom'
import ConfigurationContainer from "../components/configuration/ConfigurationContainer";
import AddressContainer from "../components/Address/AddressContainer";
import CheckoutContainer from "../components/checkout/CheckoutContainer";

export const Paths = {
    configuration: '/configuration',
    address: '/address',
    checkout: '/checkout',
};

export default [
    <Route key="configuration" path={Paths.configuration} component={ConfigurationContainer}/>,
    <Route key="address" path={Paths.address} component={AddressContainer}/>,
    <Route key="checkout" path={Paths.checkout} component={CheckoutContainer}/>
]