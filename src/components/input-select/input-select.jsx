import React from 'react';
import './input-select.css';

export default class InputSelect extends React.Component {

    componentDidUpdate() {
        const selectValue = document.getElementById(this.props.name.toLowerCase()).value;
        this.props.model.setValue(this.props.modelProperty, selectValue);
    }

    handleChange(event) {
        this.props.model.setValue(this.props.modelProperty, event.target.value);
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