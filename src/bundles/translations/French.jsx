import React, {Fragment} from 'react'
import {orderRoutes} from '../order/routes/order'
import {TranslationProvider} from "./index";
import {productRoutes} from "../product-display/routes/product-display";

export default class French extends React.Component {

    componentWillMount() {
        TranslationProvider.changeLanguage('fr');
    }

    render() {
        return (
            <Fragment>
                {orderRoutes('fr')}
                {productRoutes('fr')}
            </Fragment>
        )
    }

}