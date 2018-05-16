import React from 'react';
import '../view.css'
import {OrderContext} from '../../App'
import sendMail from '../../service/EmailService';
import OrderDisplay from "../../components/order-display/OrderDisplay";
import SuccessMessage from "../../components/messages/SuccessMessage";
import {withRouter} from 'react-router-dom'

class CheckoutView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displaySuccess: false,
            sendCopy: true,
        };
        this.handleCheckout.bind(this)
    }

    handleCheckout(orderContext) {
        this.setState({displaySuccess: true});
        if (this.state.sendCopy) {
            const deliveryAddress = orderContext.getAddress('deliveryAddress');
            let invoiceAddress = orderContext.getAddress('invoiceAddress');
            if (invoiceAddress === null) {
                invoiceAddress = deliveryAddress;
            }
            const orderSuccessful = sendMail(orderContext.state.item, deliveryAddress, invoiceAddress, orderContext.state.email);
            this.setState({displaySuccess: orderSuccessful});
        }
        setTimeout(() => {
            this.setState({displaySuccess: false});
            this.props.history.push('/order');
        }, 4000)
    }

    componentDidCatch() {
        window.location.href = '/order';
    }

    handleSendMailChange(event) {
        this.setState({sendCopy: event.target.checked})
    }

    render() {
        return (
            <div id="content">
                <SuccessMessage visible={this.state.displaySuccess}/>
                <OrderDisplay/>
                <div className="form-row">
                        <span>
                            <input type="checkbox" defaultChecked onClick={this.handleSendMailChange.bind(this)}/>
                            <label>Kopie der Bestellung an mich</label>
                        </span>
                </div>
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