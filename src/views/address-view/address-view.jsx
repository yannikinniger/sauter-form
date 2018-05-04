import React from 'react';
import AddressSection from '../../components/address-section/address-section'
import {Configuration} from '../../model/configuration'
import '../view.css'

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
            <div id="content">
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
                <div className="twin-button-row">
                    <button onClick={() => this.props.history.push('/')}>Zurück</button>
                    <button onClick={() => this.props.history.push('/checkout')}>Weiter</button>
                </div>
            </div>
        )
    }

}