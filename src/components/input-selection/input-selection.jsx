import React from 'react';

export default class InputSelection extends React.Component {

    constructor(props) {
        super(props);
        this.updateModel = this.updateModel.bind(this);
    }

    updateModel(event) {
        if (this.props.model !== undefined && this.props.modelProperty !== undefined) {
            this.props.model.setValue(this.props.modelProperty, event.target.value);
        }
    }

    render() {
        const options = this.props.options.map(option =>
            <option key={option} value={option}>{option}</option>
        );
        return (
            <div className="form-row">
                <label>{this.props.name}</label>
                <select id={this.props.name.toLowerCase()} onChange={this.updateModel}>
                    {options}
                </select>
            </div>
        )
    }

}