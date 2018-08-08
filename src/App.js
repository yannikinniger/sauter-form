import React, {Component} from 'react';
import './App.css';
import {unregister} from "./registerServiceWorker";
import Header from "./bundles/common/Header/Header";
import {Translated, TranslationProvider} from "./bundles/translations";
import {withRouter} from 'react-router-dom'

unregister();

class App extends Component {

    constructor(props) {
        super(props);
        this.setLanguageFromUrl(window.location);
        props.history.listen(location => this.setLanguageFromUrl(location));
    }

    setLanguageFromUrl(location) {
        const language = location.pathname.substring(1, 3);
        TranslationProvider.changeLanguage(language)
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <div id="content-container">
                    <Translated language="de"/>
                    <Translated language="fr"/>
                </div>
            </div>
        );
    }
}


export default withRouter(App);