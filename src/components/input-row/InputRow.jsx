import React from 'react';
import './InputRow.css'

export default class InputRow extends React.Component {

    static handleChange(event) {
        event.target.classList.remove('error')
    }

    render() {
        return (
            <div className="form-row">
                <label>{this.props.title}</label>
                <input type="text" name={this.props.name.toLowerCase()} onChange={InputRow.handleChange}/>
            </div>
        )
    }
}