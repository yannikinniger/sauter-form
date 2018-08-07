import React from 'react'
import DnKvsSelection from './DnKvsSelection/DnKvsSelection'
import PriceDisplay from './PriceDisplay/PriceDisplay'
import {RadioInput} from '../../../common/Input'
import OrderContext from '../../context/OrderContext'
import {Paths} from '../../routes/order'

export default class ConfigurationContainer extends React.Component {

    valveOptions = ["2-Weg", "3-Weg"];

    render() {
        return (
            <div id="content">
                <div id="product-section">
                    <h2>Auswahl Regelkugelhahn</h2>
                    <OrderContext.Consumer>
                        {context =>
                            <React.Fragment>
                                <RadioInput name="Ventiltyp" options={this.valveOptions}
                                            updateCallback={value => context.updateItem('valveAmount', value)}/>
                                <DnKvsSelection orderContext={context}/>
                                <PriceDisplay orderContext={context}/>
                            </React.Fragment>
                        }
                    </OrderContext.Consumer>
                </div>
                <div className="twin-button-row">
                    <button onClick={() => this.props.history.push('/')}>Zurück</button>
                    <button onClick={() => this.props.history.push(Paths.address)} type="button">Weiter</button>
                </div>
            </div>
        )
    }

}