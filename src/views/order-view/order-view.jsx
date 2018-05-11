import React from 'react';
import InputRadio from '../../components/input-radio/InputRadio'
import DnKvsSelection from '../../components/dn-kvs-selection/DnKvsSelection'
import {Configuration} from '../../model/configuration'
import PriceDisplay from "../../components/price-display/PriceDisplay";
import '../view.css'
import { Link } from 'react-router-dom'

export default class OrderView extends React.Component {

    valveOptions = ["2-Weg", "3-Weg"];
    listenersToActivate = [];

    constructor(props) {
        super(props);
        const configObject = Configuration();
        this.state = {
            configObject: configObject,
            sameInvoiceAddress: true
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
        this.state.configObject.notifyListeners();
    }

    render() {
        return (
            <div id="content">
                <div id="product-section">
                    <h2>Produkt</h2>
                    <InputRadio name="Ventiltyp" options={this.valveOptions}
                                model={this.state.configObject}
                                modelProperty="valveAmount"/>
                    <DnKvsSelection configObject={this.state.configObject} register={this.registerListenersToActivate}/>
                    <PriceDisplay configObject={this.state.configObject} register={this.registerListenersToActivate}/>
                </div>
                <div className="form-row">
                    <Link to="/address">
                        <button type="button">Weiter</button>
                    </Link>
                </div>
            </div>
        )
    }

}