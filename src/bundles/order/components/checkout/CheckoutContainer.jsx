import React from 'react';
import OrderContext from '../../context/OrderContext'
import {sendMail} from '../../functions';
import OrderDisplay from "./OrderDisplay/OrderDisplay";
import {SuccessMessage} from "../../../common/Messages";
import {Paths} from '../../routes/order'
import {TranslationProvider} from "../../../translations";

export default class CheckoutContainer extends React.Component {

    text = TranslationProvider.translationObject.order;

    constructor(props) {
        super(props);
        this.state = {
            displaySuccess: false,
            sendCopy: true,
        };
        this.handleCheckout.bind(this)
    }

    handleCheckout(orderContext) {
        if (this.state.displaySuccess === false) {
            const deliveryAddress = orderContext.getAddress('deliveryAddress');
            let invoiceAddress = orderContext.getAddress('invoiceAddress');
            orderContext.setState({sendCopy: this.state.sendCopy});
            if (invoiceAddress === null) {
                orderContext.setAddress('invoiceAddress', deliveryAddress);
            }

            sendMail(orderContext)
                .then(orderSuccessful => {
                    this.setState({displaySuccess: orderSuccessful});
                    setTimeout(() => {
                        this.setState({displaySuccess: false});
                        this.props.history.push(Paths.configuration);
                    }, 4000)
                });
        }
    }

    componentDidCatch() {
        window.location.href = Paths.configuration;
    }

    handleSendMailChange(event) {
        this.setState({sendCopy: event.target.checked})
    }

    render() {
        return (
            <div id="content">
                <h2>{this.text.checkout.overview}</h2>
                <SuccessMessage visible={this.state.displaySuccess}/>
                <OrderContext>
                    {context => (
                        <React.Fragment>
                            <OrderDisplay orderContext={context}/>
                            <button onClick={() => this.handleCheckout(context)}>{this.text.checkout.order}</button>
                            <div className="form-row">
                                <span>
                                    <input type="checkbox" defaultChecked
                                           onClick={this.handleSendMailChange.bind(this)}/>
                                    <label>{this.text.checkout.sendCopy}</label>
                                </span>
                            </div>
                            <button id="back-btn" onClick={() => this.props.history.push(Paths.address)}>
                                {this.text.buttons.back}
                            </button>
                        </React.Fragment>
                    )}
                </OrderContext>
            </div>
        )
    }

}