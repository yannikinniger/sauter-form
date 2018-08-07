import React, {Component} from 'react';
import './App.css';
import OrderBundle from './bundles/order'
import ProductBundle from './bundles/product-display'
import {unregister} from "./registerServiceWorker";
import Header from "./bundles/common/Header/Header";

export const text = getLanguage();

unregister();
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div id="content-container">
                    <ProductBundle/>
                    <OrderBundle/>
                </div>
            </div>
        );
    }
}

export default App;

function getLanguage() {
    console.log(window.location.pathname.startsWith('/de'))
}
