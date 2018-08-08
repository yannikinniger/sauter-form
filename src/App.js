import React, {Component} from 'react';
import './App.css';
import {unregister} from "./registerServiceWorker";
import Header from "./bundles/common/Header/Header";
import {French} from "./bundles/translations";

export const text = getLanguage();

unregister();
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div id="content-container">
                    <French/>
                </div>
            </div>
        );
    }
}

export default App;

function getLanguage() {
    console.log(window.location.pathname.startsWith('/de'))
}
