import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import ProductView from "./views/product-view/ProductView";
import OrderView from "./views/OrderView";

export const OrderContext = React.createContext();

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src="/assets/logo.png" id="logo" alt="logo"/>
                </header>
                <Route exact path="/" render={ProductView}/>
                <Route path="/order" component={OrderView}/>
                <Route onEnter={() => window.location.reload(true)}/>
            </div>
        );
    }
}

export default App;
