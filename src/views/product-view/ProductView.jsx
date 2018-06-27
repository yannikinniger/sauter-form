import React from 'react'
import {withRouter} from 'react-router-dom';
import './ProductView.css';
import {Link} from 'react-router-dom'

class ProductView extends React.Component {

    handleSubmit() {
        this.props.history.push('/order');
    }

    render() {
        return (
            <div id="product-view">
                <main id="content-container">
                    <div className="content">
                        <h1>Einführungsaktion zum Spezialpreis</h1>
                        <div className="content-block">
                            <p>Heizungsregler-Set für «witterungsgeführte» Vorlauftemperatur-Regelung</p>
                            <img src="/assets/EQJW126.png" id="product-img" alt="Produktbild"/>
                            <p>Heizungsregler <a href="https://www.sauter-building-control.ch/?id=318824"
                                                 target="_blank"
                                                 rel="noopener noreferrer">EQJW126F001</a>
                            </p>
                        </div>
                        <div className="content-block">
                            <h3>Inklusive</h3>
                            <div id="set-overview">
                                <img src="/assets/vl-fuehler.png" alt="Produktbild"/>
                                <img src="/assets/at-fuehler.png" alt="Produktbild"/>
                                <img src="/assets/regelkugelhahn.png" alt="Produktbild"/>
                                <p id="vl-fuehler-text">
                                    Vorlauftemperatur-Fühler <a
                                    href="https://www.sauter-building-control.ch/de/produkte/produktdetails/pdm/egt-311-411-anlegetemperaturfuehler.html"
                                    target="_blank" rel="noopener noreferrer">
                                    EGT311F102
                                </a>
                                </p>
                                <p id="at-fuehler-text">
                                    Aussentemperatur-Fühler <a
                                    href="https://www.sauter-building-control.ch/de/produkte/produktdetails/pdm/egt-301-401-aussentemperaturfuehler.html"
                                    target="_blank" rel="noopener noreferrer">
                                    EGT301F102
                                </a>
                                </p>
                                <p id="regelkugelhahn-text">
                                    2- oder 3-Wege Regelkugelhahn inkl. <a
                                    href="https://www.sauter-building-control.ch/de/produkte/produktdetails/pdm/akm-105-115-drehantrieb-fuer-kugelhahn.html"
                                    target="_blank" rel="noopener noreferrer">
                                    Drehantrieb AKM
                                </a>
                                </p>
                            </div>
                        </div>
                        <div className="content-block jumbotron">
                            <div className="content">
                                <h2>Bereits ab 570.-</h2>
                                <button className="pull-right order-now-button" onClick={this.handleSubmit.bind(this)}>
                                    Zur Bestellung
                                </button>
                            </div>
                        </div>
                        <div className="content-block">
                            <h3>Schema</h3>
                            <img id="schema" src="/assets/schema.png" alt="Schema"/>
                            <div>
                                <Link to={process.env.PUBLIC_URL + '/normschema_EQJW126.pdf'} target="_blank">Link zum Normschema</Link>
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
                            <button className="pull-right order-now-button" onClick={this.handleSubmit.bind(this)}>
                                Zur Bestellung
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        );

    }
}

export default withRouter(ProductView);