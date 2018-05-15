import React from 'react'
import {withRouter} from 'react-router-dom';
import './ProductView.css';

class ProductView extends React.Component {

    handleSubmit() {
        this.props.history.push('/order');
    }

    render() {
        return (
            <div id="product-view">
                <header>
                    <h1>Heizungsregler mit digitaler Bedienoberfläche</h1>
                    <img src="/assets/EQJW126.png" id="product-img" alt="Produktbild"/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon fill="white" points="0,100 100,0 100,100"/>
                    </svg>
                </header>
                <main>
                    <div className="content">
                        <h2>Der neue EQJW 126</h2>
                        <h3>Ihr Vorteil für mehr Energieeffizienz</h3>
                        <p>
                            Integrierte Abschaltautomatiken für die Heizung zum Einsparen von Energie und komfortable
                            Schaltuhr zur Programmierung der Anlage entsprechend der individuellen Bedürfnisse.
                        </p>
                        <button className="pull-right order-now-button" onClick={this.handleSubmit.bind(this)}>
                            Jetzt bestellen
                        </button>
                        <h3>Einsatzgebiete</h3>
                        <p>
                            Witterungsgeführte Vorlauftemperaturregelung in Gebäuden aller Art.
                        </p>
                        <h3>Schema</h3>
                        <img src="/assets/schema.png" alt="Schema"/>
                        <h3>Eigenschaften</h3>
                        <ul>
                            <li>PI-Vorlauftemperaturregelung nach Heizkennlinie oder 4-Punkte-Kennlinie</li>
                            <li>Hoher Bedienkomfort durch modernes Bedienkonzept (Drehen und Drücken) und grosse
                                LCD-Anzeige
                            </li>
                            <li>Komfortables Wochen- und Jahresschaltprogramm mit Optimierung der Schaltzeitpunkte</li>
                            <li>Automatische Sommerzeit-/Winterzeit-Umschaltung</li>
                            <li>Min./Max. Begrenzung der Vorlauftemperatur und max. Begrenzung der
                                Rücklauftemperatur
                            </li>
                            <li>Frostschutzfunktion, Pumpen- und Ventilfestsitzschutz-Funktion</li>
                            <li>Funktionsheizen (Funktion zur Estrichtrocknung)</li>
                            <li>Aufschaltung der Raumtemperatur mittels Raumtemperatursensor</li>
                            <li>Ni/Pt1000-Eingänge für Aussen-, Vorlauf-, Rücklauf- und Raumtemperatur</li>
                            <li>Relaisausgänge zur Ansteuerung von Stellorgeräten und Pumpen</li>
                            <li>Handbetrieb</li>
                            <li>Elektrischer Anschluss im Sockel</li>
                            <li>Schnittstelle für diverses Zubehör wie Modem, Gateway, Dataloggingmodul etc.</li>
                        </ul>
                        <button className="pull-right order-now-button" onClick={this.handleSubmit.bind(this)}>
                            Jetzt bestellen
                        </button>
                    </div>
                </main>
            </div>
        );

    }
}

export default withRouter(ProductView);