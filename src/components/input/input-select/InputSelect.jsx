import React from 'react';
import './InputSelect.css';

export default class InputSelect extends React.Component {

    componentDidUpdate() {
        const selectValue = document.getElementById(this.props.name.toLowerCase()).value;
        this.props.updateCallback(selectValue);
    }

    handleChange(event) {
        this.props.updateCallback(event.target.value);
    }

    render() {
        const options = this.props.options.map(option =>
            <option key={option} value={option}>{option}</option>
        );
        return (
            <div className="form-row">
                <label>{this.props.name}</label>
                <div className="selectdiv">
                    <select id={this.props.name.toLowerCase()} onChange={this.handleChange.bind(this)}>
                        {options}
                    </select>
                </div>
            </div>
        )
    }

}