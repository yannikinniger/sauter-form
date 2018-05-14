import React from 'react'
import InputSelect from "../input-select/InputSelect";
import {OrderContext} from '../../App';

export default class DnKvsSelection extends React.Component {

    dnOptions = ["DN15", "DN20", "DN25", "DN32", "DN40", "DN50"];

    dnChanged(event, context) {
        context.updateItem('dn', event.target.value);
    }

    render() {
        const dnOptions = this.dnOptions.map(option =>
            <option key={option} value={option}>{option}</option>
        );
        return (
            <OrderContext.Consumer>
                {context => (
                    <React.Fragment>
                        <div className="form-row">
                            <label>Nennweite</label>
                            <div className="selectdiv">
                                <select id="dn" onChange={(e) => this.dnChanged(e, context)}>
                                    {dnOptions}
                                </select>
                            </div>
                        </div>
                        <InputSelect name="KVS" options={context.state.kvsOptions}
                                     model={this.props.configObject}
                                     updateCallback={value => context.updateItem('kvs', value)}
                                     modelProperty="kvs"/>
                    </React.Fragment>
                )}
            </OrderContext.Consumer>
        )
    }

}