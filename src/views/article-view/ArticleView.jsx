import React from 'react';
import InputRadio from '../../components/input/input-radio/InputRadio'
import DnKvsSelection from '../../components/dn-kvs-selection/DnKvsSelection'
import PriceDisplay from "../../components/price-display/PriceDisplay";
import '../view.css'
import {OrderContext} from '../../App';

export default class ArticleView extends React.Component {

    valveOptions = ["2-Weg", "3-Weg"];

    handleSubmit() {
        this.props.history.push('/order/address')
    }

    render() {
        return (
            <div id="content">
                <div id="product-section">
                    <h2>Auswahl Regelkugelhahn</h2>
                    <OrderContext.Consumer>
                        {context =>
                            <InputRadio name="Ventiltyp" options={this.valveOptions}
                                        updateCallback={value => context.updateItem('valveAmount', value)}/>
                        }
                    </OrderContext.Consumer>
                    <DnKvsSelection/>
                    <PriceDisplay/>
                </div>
                <div className="twin-button-row">
                    <button onClick={() => this.props.history.push('/')}>Zurück</button>
                    <button onClick={this.handleSubmit.bind(this)} type="button">Weiter</button>
                </div>
            </div>
        )
    }

}