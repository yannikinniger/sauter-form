import React from 'react'
import './price-display.css'
import { ItemContext } from '../../App'

export default class PriceDisplay extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="price-display">
                    <h2>Übersicht</h2>
                    <ItemContext.Consumer>
                        {context => (
                            <React.Fragment>
                                <div className="price-row">
                                    <label id="article">{context.state.item.articleNumber}</label>
                                </div>
                                <div className="price-row">
                                    <label>Anzahl</label>
                                    <span>
                                        <i className="fas fa-minus" onClick={() => context.decreaseQuantity()}/>
                                        <label id="quantity">{context.state.item.quantity}</label>
                                        <i className="fas fa-plus" onClick={() => context.increaseQuantity()}/>
                                    </span>
                                </div>
                                <div className="price-row">
                                    <label>Preis</label>
                                    <label>{context.state.item.price}.00</label>
                                </div>
                            </React.Fragment>
                        )}
                    </ItemContext.Consumer>
                </div>
            </React.Fragment>
        )
    }

}