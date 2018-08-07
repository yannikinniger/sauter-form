import React from 'react'
import './OrderDisplay.css';
import {ArticleDisplay} from '../../common';

export default class OrderDisplay extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    {this.props.orderContext.state.project === "" ?
                        <span/>
                        :
                        <p>Projekt: {this.props.orderContext.state.project}</p>
                    }
                    {this.props.orderContext.state.reference === "" ?
                        <span/>
                        :
                        <p>Referenz: {this.props.orderContext.state.reference}</p>
                    }
                </div>
                <div id="checkout-addresses">
                    <AddressDisplay name="Lieferadresse"
                                    address={this.props.orderContext.state.deliveryAddress}/>
                    <AddressDisplay name="Rechnungsadresse"
                                    address={this.props.orderContext.state.invoiceAddress}/>
                </div>
                <ArticleDisplay item={this.props.orderContext.state.item}/>
            </React.Fragment>
        )
    }

}

function AddressDisplay(props) {
    return (
        <div className="order-display-section">
            <h3>{props.name}</h3>
            <table>
                <tbody>
                <tr>
                    <td>{props.address.company}</td>
                </tr>
                <tr>
                    <td>{props.address.street}</td>
                </tr>
                <tr>
                    <td>{props.address.zip + " " + props.address.city}</td>
                </tr>
                <tr>
                    <td>{props.address.email}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}