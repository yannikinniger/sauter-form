import React, {Component} from 'react';
import './App.css';
import OrderView from './views/order-view/order-view.jsx'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src="/assets/logo.png" id="logo" alt="logo"/>
                </header>
                <div id="content-container">
                    <OrderView/>
                </div>
            </div>
        );
    }
}

export default App;
