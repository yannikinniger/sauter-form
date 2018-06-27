import React from 'react';
import './view.css'
import {Route} from 'react-router-dom';
import AddressView from "./AddressView";
import CheckoutView from "./CheckoutView";
import ArticleView from "./ArticleView";
import OrderProvider from "../model/OrderProvider";

export default class OrderView extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="content-container">
                    <OrderProvider>
                        <Route exact path="/order" component={ArticleView}/>
                        <Route path="/order/address" component={AddressView}/>
                        <Route path="/order/checkout" component={CheckoutView}/>
                        <Route path="/files" onEnter={() => window.location.reload(true)}/>
                    </OrderProvider>
                </div>
            </React.Fragment>
        )
    }
}