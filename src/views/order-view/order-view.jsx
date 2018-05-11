import React from 'react';
import InputRadio from '../../components/input-radio/InputRadio'
import DnKvsSelection from '../../components/dn-kvs-selection/DnKvsSelection'
import PriceDisplay from "../../components/price-display/PriceDisplay";
import '../view.css'
import {Link} from 'react-router-dom'
import {ItemContext} from '../../App';

export default class OrderView extends React.Component {

    valveOptions = ["2-Weg", "3-Weg"];

    render() {
        return (
            <div id="content">
                <div id="product-section">
                    <h2>Produkt</h2>
                    <ItemContext.Consumer>
                        {context => (
                            <InputRadio name="Ventiltyp" options={this.valveOptions}
                                        updateCallback={value => context.updateItem('valveAmount', value)}/>
                        )}
                    </ItemContext.Consumer>
                    <DnKvsSelection/>
                    <PriceDisplay/>
                </div>
                <div className="form-row">
                    <Link to="/address">
                        <button type="button">Weiter</button>
                    </Link>
                </div>
            </div>
        )
    }

}