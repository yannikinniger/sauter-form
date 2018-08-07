import React from 'react'
import './PriceDisplay.css'
import {ArticleDisplay} from "../../common";

export default class PriceDisplay extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="price-display">
                    <h2>Artikel</h2>
                    <ArticleDisplay item={this.props.orderContext.state.item}/>
                    <div className="price-row">
                        <label>Anzahl</label>
                        <span>
                            <i className="fas fa-minus" onClick={() => this.props.orderContext.decreaseQuantity()}/>
                            <label id="quantity">{this.props.orderContext.state.item.quantity}</label>
                            <i className="fas fa-plus" onClick={() => this.props.orderContext.increaseQuantity()}/>
                        </span>
                    </div>
                    <div className="price-row">
                        <label>Preis</label>
                        <label>{this.props.orderContext.state.item.price}.00 netto exkl. MwSt</label>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}