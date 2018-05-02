import React from 'react'
import { PriceService } from "../../service/price-service";
import './price-display.css'

export default class PriceDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            priceService: PriceService(this.props.configObject)
        };
        this.props.configObject.registerListener(newConfig => this.updatePrice(newConfig));
    }

    updatePrice(newConfig) {
        this.setState({price: this.state.priceService.getPrice()});
    }

    render() {
        return(
            <div className="price-display">
                { this.state.price ?
                    <div>
                        <div>
                            <label>Product</label>
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