import React from 'react'
import './ProductContainer.css';
import {Link} from 'react-router-dom'
import Jumbotron from "./Jumbotron/Jumbotron";
import SetOverview from './SetOverview/SetOverview'
import {Paths} from "../../order/routes/order";

export default class ProductContainer extends React.Component {

    render() {
        return (
            <div id="product-view">
                <h1>Einführungsaktion zum Spezialpreis</h1>
                <div className="content-block">
                    <p>Heizungsregler-Set für «witterungsgeführte» Vorlauftemperatur-Regelung</p>
                    <img src="/assets/EQJW126.png" id="product-img" alt="Produktbild"/>
                    <p>Heizungsregler <a href="https://www.sauter-building-control.ch/?id=318824"
                                         target="_blank"
                                         rel="noopener noreferrer">EQJW126F001</a>
                    </p>
                </div>
                <SetOverview/>
                <Jumbotron/>
                <div className="content-block">
                    <h3>Schema</h3>
                    <img id="schema" src="/assets/schema.png" alt="Schema"/>
                    <div>
                        <Link to={process.env.PUBLIC_URL + '/normschema_EQJW126.pdf'} target="_blank">Link zum
                            Normschema</Link>
                    </div>
                </div>
                <div className="content-block">
                    <h3>Im Paketpreis nicht enthalten sind: </h3>
                    <ul>
                        <li>Verschraubungen</li>
                        <li>Montage der Fühler</li>
                        <li>Montage des Regekugelhahn und des Antriebs</li>
                        <li>Elektrische Installation und Anschlussarbeiten</li>
                        <li>Elektro-Tableau</li>
                        <li>Inbetriebnahme des Heizungsreglers</li>
                    </ul>
                </div>
                <div className="content-block">
                    <p>Für weitere Auskünfte wenden Sie sich bitte an unsere lokale Niederlassung</p>
                    <a href="https://www.sauter-building-control.ch/unternehmen-sauter/standorte-kontakte-sauter.html"
                       target="_blank" rel="noopener noreferrer">Standorte</a>
                </div>
                <div className="content-block">
                    <button className="pull-right order-now-button"
                            onClick={() => this.props.history.push(Paths.configuration)}>
                        Zur Bestellung
                    </button>
                </div>
            </div>
        );

    }
}