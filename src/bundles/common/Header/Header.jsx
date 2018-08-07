import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <img src="/assets/logo.png" id="logo" alt="logo"/>
            </header>
        )
    }
}