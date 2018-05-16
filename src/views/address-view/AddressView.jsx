import React from 'react';
import AddressSection from '../../components/address-section/AddressSection'
import '../view.css'
import {Address} from "../../model/Address";
import formExtract from "form-extract";
import {OrderContext} from "../../App";
import {withRouter} from 'react-router-dom'
import InputRow from "../../components/input/input-row/InputRow";

class AddressView extends React.Component {

    hasError = false;

    constructor(props) {
        super(props);
        this.state = {
            sameInvoiceAddress: true,
        };
        this.saveForm.bind(this);
        this.handleFormError.bind(this);
    }

    handleInvoiceAddressChange(event) {
        this.setState({sameInvoiceAddress: event.target.checked})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.hasError = false;
        this.saveForm('deliveryAddress');
        if (!this.state.sameInvoiceAddress) {
            this.saveForm('invoiceAddress');
        }
        if (!this.hasError) {
            this.props.history.push('/order/checkout');
        }
    }

    handleBack() {
        this.context.clearItems();
        this.props.history.push('/order');
    }

    render() {
        return (
            <React.Fragment>
                <div id="content">
                    <OrderContext.Consumer>
                        {context => {
                            this.context = context
                        }}
                    </OrderContext.Consumer>
                    <AddressSection title="Lieferadresse" formName="deliveryAddress"/>
                    <div className="form-row">
                        <InputRow title="Email" name="email" value={this.context.email}
                                  onChange={email => this.context.setEmail(email)}/>
                    </div>
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
                        <button onClick={this.handleBack.bind(this)}>Zurück</button>
                        <button onClick={this.handleSubmit.bind(this)}>Weiter</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    saveForm(name) {
        const formData = formExtract(`.${name}`);
        try {
            const address = new Address(formData);
            this.context.setAddress(name, address);
        } catch (error) {
            this.handleFormError(formData);
        }
    }

    handleFormError(formData) {
        this.hasError = true;
        Object.entries(formData)
            .filter(([key, value]) => value === '')
            .forEach(([key, value]) => {
                const elements = document.getElementsByName(key);
                elements.forEach(element => {
                    element.classList.add('error');
                    element.placeholder = "Benötigt";
                })
            })
    }

}

export default withRouter(AddressView);