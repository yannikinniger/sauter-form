import React from 'react'
import './ProductContainer.css';
import {Link} from 'react-router-dom'
import Jumbotron from "./Jumbotron/Jumbotron";
import SetOverview from './SetOverview/SetOverview'
import {Paths} from "../../order/routes/order";
import {TranslationProvider} from '../../translations'

export default class ProductContainer extends React.Component {

    translation = TranslationProvider.translationObject.productView;

    render() {
        return (
            <div id="product-view">
                <h1>{this.translation.title}</h1>
                <div className="content-block">
                    <p>{this.translation.subtitle}</p>
                    <img src="/assets/EQJW126.png" id="product-img" alt="Produktbild"/>
                    <p>{this.translation.descriptionRegulator} <a href="https://www.sauter-building-control.ch/?id=318824"
                                         target="_blank"
                                         rel="noopener noreferrer">EQJW126F001</a>
                    </p>
                </div>
                <SetOverview text={this.translation}/>
                <Jumbotron text={this.translation}/>
                <div className="content-block">
                    <h3>Schema</h3>
                    <img id="schema" src="/assets/schema.png" alt="Schema"/>
                    <div>
                        <Link to={process.env.PUBLIC_URL + '/normschema_EQJW126.pdf'} target="_blank">Link zum
                            Normschema</Link>
                    </div>
                </div>
                <div className="content-block">
                    <h3>{this.translation.notIncluded.header}</h3>
                    <ul>
                        {this.translation.notIncluded.items.map(item => {
                            return(<li key={item}>{item}</li>)
                        })}
                    </ul>
                </div>
                <div className="content-block">
                    <p>Für weitere Auskünfte wenden Sie sich bitte an unsere lokale Niederlassung</p>
                    <a href="https://www.sauter-building-control.ch/unternehmen-sauter/standorte-kontakte-sauter.html"
                       target="_blank" rel="noopener noreferrer">Standorte</a>
                </div>
                <div className="content-block">
                    <button className="pull-right order-now-button"
                            onClick={() => this.props.history.push(`${window.location.pathname}/${Paths.configuration}`)}>
                        {this.translation.orderButton}
                    </button>
                </div>
            </div>
        );

    }
}