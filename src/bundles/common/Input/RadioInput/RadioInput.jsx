import React from 'react';
import './RadioInput.css'

export default class RadioInput extends React.Component {

    constructor(props) {
        super(props);
        this.updateModel = this.updateModel.bind(this);
    }

    updateModel(event) {
        this.props.updateCallback(event.target.value);
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