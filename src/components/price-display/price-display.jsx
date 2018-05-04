import React from 'react'
import {PriceService} from "../../service/price-service";
import {getArticleNumber} from '../../service/article-number-service';
import './price-display.css'

export default class PriceDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            priceService: PriceService(this.props.configObject)
        };
        this.props.register(() => {
            this.props.configObject.registerListener(newConfig => this.updateConfig(newConfig));
        });
    }

    updateConfig(newConfig) {
        this.setState({
            price: this.state.priceService.getPrice(),
            product: getArticleNumber(newConfig),
            quantity: newConfig.quantity,
        });
    }

    increaseQuantity() {
        const newQuantity = this.props.configObject.getQuantity() + 1;
        this.props.configObject.setQuantity(newQuantity);
    }

    decreaseQuantity() {
        const newQuantity = this.props.configObject.getQuantity() - 1;
        this.props.configObject.setQuantity(newQuantity);
    }

    render() {
        return (
            <div>
                {this.state.price ?
                    <div className="price-display">
                        <h2>Übersicht</h2>
                        <div className="price-row">
                            <label id="article">{this.state.product}</label>
                        </div>
                        <div className="price-row">
                            <label>Anzahl</label>
                            <span>
                                <i className="fas fa-minus" onClick={() => this.decreaseQuantity()}/>
                                <label id="quantity">{this.state.quantity}</label>
                                <i className="fas fa-plus" onClick={() => this.increaseQuantity()}/>
                            </span>
                        </div>
                        <div className="price-row">
                            <label>Preis</label>
                            <label>{this.state.price}.00</label>
                        </div>
                    </div>
                    :
                    <span/>
                }
            </div>
        )
    }

}