import React from 'react'
import {OrderContext} from '../../App';
import './OrderDisplay.css';
import ArticleRow from "../article-row/ArticleRow";

export default class OrderDisplay extends React.Component {

    render() {
        return (
            <OrderContext.Consumer>
                {context => (
                    <React.Fragment>
                        <AddressDisplay name="Lieferadresse" address={context.getAddress('deliveryAddress')}/>
                        <ItemDisplay item={context.getItem()}/>
                    </React.Fragment>
                )}
            </OrderContext.Consumer>
        )
    }

}

function AddressDisplay(props) {
    return (
        <div className="order-display-section">
            <h2>{props.name}</h2>
            <table>
                <tbody>
                <tr>
                    <td>{props.address.company}</td>
                </tr>
                <tr>
                    <td>{props.address.street}</td>
                </tr>
                <tr>
                    <td>{props.address.zipcode + " " + props.address.city}</td>
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
            <h2>Übersicht</h2>
            <ArticleRow description="Aussenfühler EGT301F102" quantity={props.item.quantity}/>
            <ArticleRow description="VL-Anlegefühler EGT311F102" quantity={props.item.quantity}/>
            <ArticleRow description="Normschema" quantity={props.item.quantity}/>
            <ArticleRow description={props.item.articleNumber} quantity={props.item.quantity}/>
            <table>
                <tbody>
                <tr>
                    <td>Ventiltyp</td>
                    <td>{props.item.valveAmount}-Weg</td>
                </tr>
                <tr>
                    <td>DN</td>
                    <td>{props.item.dn}</td>
                </tr>
                <tr>
                    <td>KVS</td>
                    <td>{props.item.kvs}</td>
                </tr>
                <tr>
                    <td>Preis</td>
                    <td>{props.item.price}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}