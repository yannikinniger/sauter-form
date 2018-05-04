import React from 'react';
import InputRow from '../../components/input-row/input-row'
import InputRadio from '../../components/input-radio/input-radio'
import DnKvsSelection from '../../components/dn-kvs-selection/dn-kvs-selection'
import { Configuration } from '../../model/configuration'
import PriceDisplay from "../../components/price-display/price-display";
import './order-view.css'

export default class OrderView extends React.Component {

    valveOptions = ["2-Weg", "3-Weg"];
    listenersToActivate = [];

    constructor(props) {
        super(props);
        const configObject = Configuration();
        this.state = {
            configObject: configObject
        };

        this.registerListenersToActivate = this.registerListenersToActivate.bind(this);
    }

    registerListenersToActivate(callback) {
        this.listenersToActivate.push(callback);
    }

    // to calculate price immediately
    componentDidMount() {
        const dn = document.getElementById('dn').value;
        const kvs = document.getElementById('kvs').value;
        this.state.configObject.setDn(dn);
        this.state.configObject.setKvs(kvs);
        this.state.configObject.setValveAmount('2');
        this.listenersToActivate.forEach(listener => listener())
        this.state.configObject.notifiyListeners();
    }

    render() {
        return (
            <form>
                <div id="product-section">
                    <h2>Produkt</h2>
                    <InputRadio name="Ventiltyp" options={this.valveOptions}
                                model={this.state.configObject}
                                modelProperty="valveAmount"/>
                    <DnKvsSelection configObject={this.state.configObject} register={this.registerListenersToActivate}/>
                    <PriceDisplay configObject={this.state.configObject} register={this.registerListenersToActivate}/>
                </div>
                <div id="address-section">
                    <h2>Lieferadresse</h2>
                    <InputRow name="Firma" />
                    <InputRow name="Projekt" />
                    <InputRow name="Strasse" />
                    <div className="twin-form-row">
                        <InputRow name="Ort" />
                        <InputRow name="Postleitzahl" />
                    </div>
                </div>
            </form>
        )
    }

}