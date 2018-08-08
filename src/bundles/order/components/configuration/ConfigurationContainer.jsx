import React from 'react'
import DnKvsSelection from './DnKvsSelection/DnKvsSelection'
import PriceDisplay from './PriceDisplay/PriceDisplay'
import {RadioInput} from '../../../common/Input'
import OrderContext from '../../context/OrderContext'
import {Paths} from '../../routes/order'
import {TranslationProvider} from "../../../translations";
import {ButtonRow} from "../common/ButtonRow/ButtonRow";

export default class ConfigurationContainer extends React.Component {

    text = TranslationProvider.translationObject.order.configuration;

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
                <ButtonRow
                    backCallback={() => this.props.history.push(`/${TranslationProvider.currentLanguage}`)}
                    proceedCallback={() => this.props.history.push(Paths.address)}
                />
            </div>
        )
    }

}