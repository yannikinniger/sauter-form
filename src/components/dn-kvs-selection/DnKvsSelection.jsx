import React from 'react'
import InputSelect from "../input/input-select/InputSelect";
import {OrderContext} from '../../App';

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
            <OrderContext.Consumer>
                {context => (
                    <React.Fragment>
                        <div className="form-row">
                            <label>Nennweite</label>
                            <div className="selectdiv">
                                <select id="dn" onChange={(e) => DnKvsSelection.dnChanged(e, context)}>
                                    {dnOptions}
                                </select>
                            </div>
                        </div>
                        <InputSelect name="KVS" options={context.state.kvsOptions}
                                     updateCallback={value => context.updateItem('kvs', value)} />
                    </React.Fragment>
                )}
            </OrderContext.Consumer>
        )
    }

}