import React from 'react'
import DnKvsSelection from './DnKvsSelection/DnKvsSelection'
import PriceDisplay from './PriceDisplay/PriceDisplay'
import {RadioInput} from '../../../common/Input'
import OrderContext from '../../context/OrderContext'
import {Paths} from '../../routes/order'
import {TranslationProvider} from "../../../translations";

export default class ConfigurationContainer extends React.Component {

    text = TranslationProvider.translationObject.orderView;

    render() {
        return (
            <div id="content">
                <div id="product-section">
                    <h2>{this.text.title}</h2>
                    <OrderContext.Consumer>
                        {context =>
                            <React.Fragment>
                                <RadioInput name={this.text.valve.title} options={this.text.valve.options}
                                            updateCallback={value => context.updateItem('valveAmount', value)}/>
                                <DnKvsSelection orderContext={context} text={this.text}/>
                                <PriceDisplay orderContext={context} text={this.text}/>
                            </React.Fragment>
                        }
                    </OrderContext.Consumer>
                </div>
                <div className="twin-button-row">
                    <button onClick={() => this.props.history.push(`/${TranslationProvider.currentLanguage}`)}>
                        Zurück
                    </button>
                    <button onClick={() => this.props.history.push(Paths.address)} type="button">Weiter</button>
                </div>
            </div>
        )
    }

}