import React from 'react';
import './input-radio.css'

export default class InputRadio extends React.Component {

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
        let counter = 0;
        const options = this.props.options.map(option =>
            <span key={option}>
                { counter++ !== 0 ?
                    <input type="radio" name={this.props.name}
                           value={option.substr(0,1)}
                           onChange={this.updateModel} />
                    :
                    <input type="radio" name={this.props.name}
                           value={option.substr(0,1)} defaultChecked
                           onChange={this.updateModel} />
                }
                <label>{option}</label>
            </span>
        );
        return (
            <div className="form-row">
                <label>{this.props.name}</label>
                <div className="input-radio-row">
                    {options}
                </div>
            </div>
        )
    }

}