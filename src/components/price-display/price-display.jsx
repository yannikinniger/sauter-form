import React from 'react'
import { PriceService } from "../../service/price-service";
import { getArticleNumber } from '../../service/article-number-service';
import './price-display.css'

export default class PriceDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            priceService: PriceService(this.props.configObject)
        };
        this.props.register(() => {
            this.props.configObject.registerListener(newConfig => this.updatePrice(newConfig));
        });
    }

    updatePrice(newConfig) {
        this.setState({price: this.state.priceService.getPrice()});
        this.setState({product: getArticleNumber(newConfig)});
    }

    render() {
        return(
            <div className="price-display">
                { this.state.price ?
                    <div>
                        <div>
                            <label>Produkt</label>
                            <label>{this.state.product}</label>
                        </div>
                        <div>
                            <label>Preis</label>
                            <label>{this.state.price}</label>
                        </div>
                    </div>
                    :
                    <span/>
                }
            </div>
        )
    }

}