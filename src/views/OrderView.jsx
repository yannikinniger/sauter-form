import React from 'react';
import './view.css'
import {Route} from 'react-router-dom';
import AddressView from "./address-view/AddressView";
import CheckoutView from "./checkout-view/CheckoutView";
import ArticleView from "./article-view/ArticleView";
import OrderProvider from "../model/OrderProvider";

export default class OrderView extends React.Component {
    render() {
        return(
            <React.Fragment>
                <header className="App-header">
                    <img src="/assets/logo.png" id="logo" alt="logo"/>
                </header>
                <div>
                    <div id="content-container">
                        <OrderProvider>
                            <Route exact path="/order" component={ArticleView}/>
                            <Route path="/order/address" component={AddressView}/>
                            <Route path="/order/checkout" component={CheckoutView}/>
                        </OrderProvider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}