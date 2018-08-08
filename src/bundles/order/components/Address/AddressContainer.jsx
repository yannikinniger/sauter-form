import React from 'react';
import AddressSection from './AddressSection'
import {Address} from "../../model";
import formExtract from "form-extract";
import OrderContext from "../../context/OrderContext";
import {FieldInput} from '../../../common/Input/index'
import {Paths} from "../../routes/order";
import {TranslationProvider} from "../../../translations";
import {ButtonRow} from "../common/ButtonRow/ButtonRow";

export default class AddressContainer extends React.Component {

    hasError = false;
    text = TranslationProvider.translationObject.order.address;

    constructor(props) {
        super(props);
        this.state = {
            sameInvoiceAddress: true,
        };
        this.getAddress.bind(this);
        this.handleFormError.bind(this);
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
            this.props.history.push(Paths.checkout);
        }
    }

    render() {
        return (
            <OrderContext.Consumer>
                {context => (
                    <div id="content">
                        <FieldInput title={this.text.projectName} name="project" value={context.state.project}
                                    onChange={project => context.setState({project: project})}
                                    placeholder={this.text.optional}/>
                        <FieldInput title={this.text.reference} name="reference" value={context.state.reference}
                                    onChange={reference => context.setState({reference: reference})}
                                    placeholder={this.text.optional}/>
                        <AddressSection title={this.text.deliveryAddress} formName="deliveryAddress"
                                        orderContext={context} text={this.text}/>
                        <FieldInput title={this.text.email} name="email" value={context.state.email}
                                    onChange={email => context.setState({email: email})}/>
                        <div className="form-row">
                                    <span>
                                        <input type="checkbox" defaultChecked
                                               onClick={this.handleInvoiceAddressChange.bind(this)}/>
                                        <label>{this.text.sameInvoiceAddress}</label>
                                    </span>
                        </div>
                        {this.state.sameInvoiceAddress ?
                            <div/>
                            :
                            <AddressSection title={this.text.invoiceAddress} formName="invoiceAddress"
                                            orderContext={context} text={this.text}/>
                        }
                        <ButtonRow
                            backCallback={() => this.props.history.push(Paths.configuration)}
                            proceedCallback={(event) => this.handleSubmit(event, context)}
                        />
                    </div>
                )}
            </OrderContext.Consumer>
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
                    element.placeholder = this.text.necessary;
                })
            })
    }

}