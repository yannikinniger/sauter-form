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
                <Route exact path="/" component={ProductView}/>
                <Route path="/order" component={OrderView}/>
            </div>
        );
    }
}

export default App;
