import React, {Component} from 'react';
import './App.css';
import OrderView from './views/order-view/order-view.jsx';
import {Route} from 'react-router-dom';
import AddressView from "./views/address-view/address-view";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src="/assets/logo.png" id="logo" alt="logo"/>
                </header>
                <div>
                    <div id="content-container">
                        <Route exact path="/" component={OrderView}/>
                        <Route path="/address" component={AddressView}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
