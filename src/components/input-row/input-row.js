import React from 'react';

export default class InputRow extends React.Component {

    render() {
        return (
            <div className="form-row">
                <label>{this.props.name}</label>
                <input type="text" name={this.props.name.toLowerCase()}/>
            </div>
        )
    }
}