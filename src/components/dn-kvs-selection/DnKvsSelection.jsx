import React from 'react'
import InputSelect from "../input-select/InputSelect";
import DnKvsMap from '../../model/DnKvsMap'

export default class DnKvsSelection extends React.Component {

    dnOptions = ["DN15", "DN20", "DN25", "DN32", "DN40", "DN50"];
    kvsMapping = [];

    constructor(props) {
        super(props);
        this.kvsMapping = DnKvsMap.getDnKvsMap('2');
        this.state = {
            kvsOptions: this.kvsMapping.get(this.dnOptions[0])
        };

        this.dnChanged = this.dnChanged.bind(this);
        this.updateKvs = this.updateKvs.bind(this);

        this.props.register(() => {
            this.props.configObject.registerListener(newConfig => this.updateKvs(newConfig));
        });
    }

    updateKvs(newConfig) {
        this.kvsMapping = DnKvsMap.getDnKvsMap(newConfig['valveAmount']);
        const newDn = newConfig['dn'];
        this.setState({ kvsOptions: this.kvsMapping.get(newDn) });
    }

    dnChanged(event) {
        this.props.configObject.setDn(event.target.value);
    }

    render() {
        const dnOptions = this.dnOptions.map(option =>
            <option key={option} value={option}>{option}</option>
        );
        return (
            <div>
                <div className="form-row">
                    <label>Nennweite</label>
                    <div className="selectdiv">
                        <select id="dn" onChange={this.dnChanged}>
                            {dnOptions}
                        </select>
                    </div>
                </div>
                <InputSelect name="KVS" options={this.state.kvsOptions}
                             model={this.props.configObject}
                             modelProperty="kvs"/>
            </div>
        )
    }

}