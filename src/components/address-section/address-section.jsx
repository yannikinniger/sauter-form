import React from 'react';
import InputRow from '../../components/input-row/input-row'
import './address-section.css'

export default class AddressSection extends React.Component {
    render() {
        return (
            <div className="address-section">
                <h2>{this.props.title}</h2>
                <InputRow name="Firma"/>
                <InputRow name="Projekt"/>
                <InputRow name="Strasse"/>
                <div className="twin-form-row">
                    <InputRow name="Ort"/>
                    <InputRow name="Postleitzahl"/>
                </div>
            </div>
        )
    }

}