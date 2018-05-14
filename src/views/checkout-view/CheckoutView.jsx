import React from 'react';
import '../view.css'
import {OrderContext} from '../../App'
import sendMail from '../../service/EmailService';

export default class AddressView extends React.Component {

    static handleCheckout(orderContext) {
        const deliveryAddress = orderContext.getAddress('deliveryAddress');
        let invoiceAddress = orderContext.getAddress('invoiceAddress') ;
        if (invoiceAddress === null) {
            invoiceAddress = deliveryAddress;
        }
        console.log(invoiceAddress);
        sendMail(orderContext.getItems(), deliveryAddress, invoiceAddress);
    }

    render() {
        return (
            <div id="content">
                <OrderContext>
                    {context => (
                        <button onClick={() => AddressView.handleCheckout(context)}>Bestellen</button>
                    )}
                </OrderContext>
            </div>
        )
    }

}