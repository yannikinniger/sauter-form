import React from 'react';
import './Messages.css';

export default class SuccessMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {visible: false}
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.setState({visible: true});
        } else {
            this.setState({visible: false})
        }
    }

    render() {
        const style = {
            display: this.state.visible ? 'flex' : 'none',
        };
        setTimeout(() => this.setState({visible: false}), 3000);
        return(
            <div id="success-message" style={style}>
                <p>Vielen Dank für Ihre Bestellung!</p>
            </div>
        )
    }
}