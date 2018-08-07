import React from 'react'
import './SetOverview.css'

export default function SetOverview() {
    return (
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
    )
}