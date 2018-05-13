import React from 'react';
import AddressSection from '../../components/address-section/AddressSection'
import '../view.css'
import AddressProvider from "../../model/AddressProvider";

export default class AddressView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sameInvoiceAddress: true
        };
    }

    handleInvoiceAddressChange(event) {
        this.setState({sameInvoiceAddress: event.target.checked})
    }

    handleContinue() {

        this.props.history.push('/checkout')
    }

    render() {
        return (
            <AddressProvider>
                <div id="content">
                    <AddressSection title="Lieferadresse" formName="deliveryAddress"/>
                    <div className="form-row">
                    <span>
                        <input type="checkbox" defaultChecked onClick={this.handleInvoiceAddressChange.bind(this)}/>
                        <label>gleiche Rechnungsadresse</label>
                    </span>
                    </div>
                    {this.state.sameInvoiceAddress ?
                        <div/>
                        :
                        <AddressSection title="Rechnungsadresse" formName="invoiceAddress"/>
                    }
                    <div className="twin-button-row">
                        <button onClick={() => this.props.history.push('/')}>Zurück</button>
                        <button onClick={() => this.props.history.push('/checkout')}>Weiter</button>
                    </div>
                </div>
            </AddressProvider>
        )
    }

}