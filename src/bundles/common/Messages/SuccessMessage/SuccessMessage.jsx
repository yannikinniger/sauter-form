import React from 'react';
import './SuccessMessages.css';

export default class SuccessMessage extends React.Component {
    render() {
        const style = {
            display: this.props.visible ? 'flex' : 'none',
        };
        return(
            <div id="success-message" style={style}>
                <p>Vielen Dank für Ihre Bestellung!</p>
            </div>
        )
    }
}