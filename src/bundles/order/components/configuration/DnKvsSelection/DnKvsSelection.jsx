import React from 'react'
import {SelectInput} from '../../../../common/Input'

export default class DnKvsSelection extends React.Component {

    dnOptions = ["DN15", "DN20", "DN25", "DN32", "DN40", "DN50"];

    static dnChanged(event, context) {
        context.updateItem('dn', event.target.value);
    }

    render() {
        const dnOptions = this.dnOptions.map(option =>
            <option key={option} value={option}>{option}</option>
        );
        return (
            <React.Fragment>
                <div className="form-row">
                    <label>{this.props.text.dnTitle}</label>
                    <div className="selectdiv">
                        <select id="dn" onChange={(e) => DnKvsSelection.dnChanged(e, this.props.orderContext)}>
                            {dnOptions}
                        </select>
                    </div>
                </div>
                <SelectInput name="KVS" options={this.props.orderContext.state.kvsOptions}
                             updateCallback={value => this.props.orderContext.updateItem('kvs', value)}/>
            </React.Fragment>
        )
    }

}