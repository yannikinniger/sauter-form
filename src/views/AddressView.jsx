import React from 'react';
import AddressSection from '../components/address-section/AddressSection'
import './view.css'
import {Address} from "../model/Address";
import formExtract from "form-extract";
import {OrderContext} from "../App";
import {withRouter} from 'react-router-dom'
import InputRow from "../components/input/input-row/InputRow";

class AddressView extends React.Component {

    hasError = false;

    constructor(props) {
        super(props);
        this.state = {
            sameInvoiceAddress: true,
        };
        this.getAddress.bind(this);
        this.handleFormError.bind(this);
        this.handleBack.bind(this);
        this.handleSubmit.bind(this);
    }

    handleInvoiceAddressChange(event) {
        this.setState({sameInvoiceAddress: event.target.checked})
    }

    handleSubmit(event, context) {
        event.preventDefault();
        this.hasError = false;
        const deliveryAddress = this.getAddress('deliveryAddress');
        context.setAddress('deliveryAddress', deliveryAddress);

        if (!this.state.sameInvoiceAddress) {
            context.setAddress('invoiceAddress', this.getAddress('invoiceAddress'));
        } else {
            context.setAddress('invoiceAddress', deliveryAddress);
        }

        if (!this.hasError) {
            this.props.history.push('/order/checkout');
        }
    }

    handleBack(context) {
        context.clearItems();
        this.props.history.push('/order');
    }

    render() {
        return (
            <div id="content">
                <OrderContext.Consumer>
                    {context => (
                        <React.Fragment>
                            <AddressSection title="Lieferadresse" formName="deliveryAddress"/>
                            <InputRow title="Email" name="email" value={context.state.email}
                                      onChange={email => context.setEmail(email)}/>
                            <div className="form-row">
                                    <span>
                                        <input type="checkbox" defaultChecked
                                               onClick={this.handleInvoiceAddressChange.bind(this)}/>
                                        <label>gleiche Rechnungsadresse</label>
                                    </span>
                            </div>
                            {this.state.sameInvoiceAddress ?
                                <div/>
                                :
                                <AddressSection title="Rechnungsadresse" formName="invoiceAddress"/>
                            }
                            <div className="twin-button-row">
                                <button onClick={() => this.handleBack(context)}>Zurück</button>
                                <button onClick={(event) => this.handleSubmit(event, context)}>
                                    Weiter
                                </button>
                            </div>
                        </React.Fragment>
                    )}
                </OrderContext.Consumer>
            </div>
        )
    }

    getAddress(name) {
        const formData = formExtract(`.${name}`);
        try {
            return new Address(formData);
        } catch (error) {
            this.handleFormError(formData);
        }
    }

    handleFormError(formData) {
        this.hasError = true;
        Object.entries(formData)
            .filter(([key, value]) => Address.requiredProperties.indexOf(key) !== -1 && value === '')
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