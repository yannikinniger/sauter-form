import React from 'react'
import {OrderContext} from '../../App';
import './OrderDisplay.css';
import ArticleCollapse from "../article-collapse/ArticleCollapse";

export default class OrderDisplay extends React.Component {

    render() {
        return (
            <OrderContext.Consumer>
                {context => (
                    <React.Fragment>
                        <div>
                            {context.state.project === "" ?
                                <span/>
                                :
                                <p>Projekt: {context.state.project}</p>
                            }
                            {context.state.reference === "" ?
                                <span/>
                                :
                                <p>Referenz: {context.state.reference}</p>
                            }
                        </div>
                        <div id="checkout-addresses">
                            <AddressDisplay name="Lieferadresse" address={context.getAddress('deliveryAddress')}/>
                            <AddressDisplay name="Rechnungsadresse" address={context.getAddress('invoiceAddress')}/>
                        </div>
                        <ItemDisplay item={context.getItem()} context={context}/>
                    </React.Fragment>
                )}
            </OrderContext.Consumer>
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

function ItemDisplay(props) {
    return (
        <div key={props.item.articleNumber} className="order-display-section">
            <h2>Artikel</h2>
            <ArticleCollapse context={props.context}/>
            <h4>Konfiguration</h4>
            <div id="article-overview">
                <section>Ventiltyp</section>
                <section>{props.item.valveAmount}-Weg</section>
                <section>DN</section>
                <section>{props.item.dn}</section>
                <section>KVS</section>
                <section>{props.item.kvs}</section>
                <section>Preis</section>
                <section>{props.item.price}.-</section>
            </div>
        </div>
    )
}