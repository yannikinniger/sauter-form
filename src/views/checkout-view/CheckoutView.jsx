import React from 'react';
import '../view.css'
import {OrderContext} from '../../App'
import sendMail from '../../service/EmailService';
import OrderDisplay from "../../components/order-display/OrderDisplay";
import SuccessMessage from "../../components/messages/SuccessMessage";
import { withRouter } from 'react-router-dom'

class CheckoutView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {displaySuccess: false};
        this.handleCheckout.bind(this)
    }

    handleCheckout(orderContext) {
        const deliveryAddress = orderContext.getAddress('deliveryAddress');
        let invoiceAddress = orderContext.getAddress('invoiceAddress') ;
        if (invoiceAddress === null) {
            invoiceAddress = deliveryAddress;
        }
        const orderSuccessful = sendMail(orderContext.getItems(), deliveryAddress, invoiceAddress);
        this.setState({displaySuccess: orderSuccessful});
    }

    componentDidCatch() {
        window.location.href = '/order';
    }

    render() {
        return (
            <div id="content">
                <SuccessMessage visible={this.state.displaySuccess} />
                <OrderDisplay/>
                <OrderContext>
                    {context => (
                        <div className="twin-button-row">
                            <button onClick={() => this.props.history.push('/order/address')}>Zurück</button>
                            <button onClick={() => this.handleCheckout(context)}>Bestellen</button>
                        </div>
                    )}
                </OrderContext>
            </div>
        )
    }

}

export default withRouter(CheckoutView);