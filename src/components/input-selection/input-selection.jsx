import React from 'react';

export default class InputSelection extends React.Component {

    componentDidUpdate() {
        const selectValue = document.getElementById(this.props.name.toLowerCase()).value;
        console.log(selectValue);
        this.props.model.setValue(this.props.modelProperty, selectValue);
    }

    render() {
        const options = this.props.options.map(option =>
            <option key={option} value={option}>{option}</option>
        );
        return (
            <div className="form-row">
                <label>{this.props.name}</label>
                <select id={this.props.name.toLowerCase()}>
                    {options}
                </select>
            </div>
        )
    }

}