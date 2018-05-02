import React from 'react';
import InputRow from '../../components/input-row/input-row'
import InputRadio from '../../components/input-radio/input-radio'
import DnKvsSelection from '../../components/dn-kvs-selection/dn-kvs-selection'
import { Configuration } from '../../model/configuration'
import PriceDisplay from "../../components/price-display/price-display";

export default class OrderView extends React.Component {

    valveOptions = ["2-Weg", "3-Weg"];

    constructor(props) {
        super(props);
        const configObject = Configuration();
        this.state = {
            configObject: configObject
        }
    }

    // to calculate price immediately
    componentDidMount() {
        const dn = document.getElementById('dn').value;
        const kvs = document.getElementById('kvs').value;
        this.state.configObject.setDn(dn);
        this.state.configObject.setKvs(kvs);
        this.state.configObject.setValveAmount(2);
        this.refs.needsListener.activateListeners();
    }

    render() {
        return (
            <form>
                <InputRow name="Firma" />
                <InputRow name="Projekt" />
                <InputRadio name="Ventiltyp" options={this.valveOptions}
                            model={this.state.configObject}
                            modelProperty="valveAmount"/>
                <DnKvsSelection configObject={this.state.configObject} ref="needsListener"/>
                <PriceDisplay configObject={this.state.configObject}/>
            </form>
        )
    }

}