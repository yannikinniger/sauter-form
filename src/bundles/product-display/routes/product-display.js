import React from 'react'
import {Route} from 'react-router-dom'
import ProductContainer from "../components/ProductContainer";

export default [
    <Route key="home" exact path="/" component={ProductContainer}/>
]