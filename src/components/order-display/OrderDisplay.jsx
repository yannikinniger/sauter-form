import React from 'react'
import {OrderContext} from '../../App';
import './OrderDisplay.css';

export default class OrderDisplay extends React.Component {

    render() {
        return (
            <OrderContext.Consumer>
                {context => (
                    <React.Fragment>
                        <AddressDisplay name="Lieferadresse" address={context.getAddress('deliveryAddress')}/>
                        <ItemDisplay items={context.getItems()}/>
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
    const items = props.items.map(item =>
        <div key={item.articleNumber} className="order-display-section">
            <h2>Artikel</h2>
            <div>
                <label><span className="quantity">{item.quantity}x</span>Aussenfühler EGT301F102</label>
            </div>
            <div>
                <label><span className="quantity">{item.quantity}x</span>VL-Anlegefühler EGT311F102</label>
            </div>
            <div>
                <label><span className="quantity">{item.quantity}x</span>{item.articleNumber}</label>
            </div>
            <table>
                <tbody>
                <tr>
                    <td>Ventiltyp</td>
                    <td>{item.valveAmount}-Weg</td>
                </tr>
                <tr>
                    <td>DN</td>
                    <td>{item.dn}</td>
                </tr>
                <tr>
                    <td>KVS</td>
                    <td>{item.kvs}</td>
                </tr>
                <tr>
                    <td>Preis</td>
                    <td>{item.price}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
    return (
        <React.Fragment>
            {items}
        </React.Fragment>
    )
}