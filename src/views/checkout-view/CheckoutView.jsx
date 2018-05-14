import React from 'react';
import '../view.css'
import {OrderContext} from '../../App'
import sendMail from '../../service/EmailService';
import OrderDisplay from "../../components/order-display/OrderDisplay";
import { withRouter } from 'react-router-dom'

class CheckoutView extends React.Component {

    static handleCheckout(orderContext) {
        const deliveryAddress = orderContext.getAddress('deliveryAddress');
        let invoiceAddress = orderContext.getAddress('invoiceAddress') ;
        if (invoiceAddress === null) {
            invoiceAddress = deliveryAddress;
        }
        console.log(invoiceAddress);
        sendMail(orderContext.getItems(), deliveryAddress, invoiceAddress);
    }

    componentDidCatch() {
        window.location.href = '/';
    }

    render() {
        return (
            <div id="content">
                <OrderDisplay/>
                <OrderContext>
                    {context => (
                        <div className="twin-button-row">
                            <button onClick={() => this.props.history.push('/address')}>Zurück</button>
                            <button onClick={() => CheckoutView.handleCheckout(context)}>Bestellen</button>
                        </div>
                    )}
                </OrderContext>
            </div>
        )
    }

}

export default withRouter(CheckoutView);