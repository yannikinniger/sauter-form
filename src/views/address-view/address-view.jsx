import React from 'react';
import AddressSection from '../../components/address-section/address-section'
import InputRadio from '../../components/input-radio/input-radio'
import DnKvsSelection from '../../components/dn-kvs-selection/dn-kvs-selection'
import {Configuration} from '../../model/configuration'
import PriceDisplay from "../../components/price-display/price-display";
import './order-view.css'

export default class AddressView extends React.Component {


    constructor(props) {
        super(props);
        const configObject = Configuration();
        this.state = {
            configObject: configObject,
            sameInvoiceAddress: true
        };
    }

    handleInvoiceAddressChange(event) {
        this.setState({sameInvoiceAddress: event.target.checked})
    }

    render() {
        return (
            <div>
                <AddressSection title="Lieferadresse"/>
                <div className="form-row">
                    <span>
                        <input type="checkbox" defaultChecked onClick={this.handleInvoiceAddressChange.bind(this)}/>
                        <label>gleiche Rechnungsadresse</label>
                    </span>
                </div>
                {this.state.sameInvoiceAddress ?
                    <div/>
                    :
                    <AddressSection title="Rechnungsadresse"/>
                }
                <div className="form-row">
                    <button>Weiter</button>
                </div>
            </div>
        )
    }

}