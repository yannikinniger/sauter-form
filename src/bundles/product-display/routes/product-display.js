import React from 'react'
import { Route } from 'react-router'
import ProductContainer from "../components/ProductContainer";

export default [
    <Route key="home" exact path="/:language" component={ProductContainer}/>
]

export const productRoutes = (language) => {
    console.log(language);
    return (
        <Route key="home" exact path={`/${language}`} component={ProductContainer}/>
    )
};