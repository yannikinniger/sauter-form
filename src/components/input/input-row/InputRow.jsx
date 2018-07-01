import React from 'react';
import './InputRow.css'

export default class InputRow extends React.Component {

    handleChange(event) {
        event.target.classList.remove('error');
        if (this.props.onChange !== undefined) {
            this.props.onChange(event.target.value)
        }
    }

    render() {
        return (
            <div className="form-row">
                <label>{this.props.title}</label>
                <input type="text" name={this.props.name.toLowerCase()}
                       onChange={this.handleChange.bind(this)} defaultValue={this.props.value}
                       placeholder={this.props.placeholder || ""}/>
            </div>
        )
    }
}