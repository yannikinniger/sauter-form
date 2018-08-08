import React, {Fragment} from 'react'
import {orderRoutes} from '../order/routes/order'
import {productRoutes} from "../product-display/routes/product-display";

export default class Translated extends React.Component {

    render() {
        return (
            <Fragment>
                {orderRoutes(this.props.language)}
                {productRoutes(this.props.language)}
            </Fragment>
        )
    }

}