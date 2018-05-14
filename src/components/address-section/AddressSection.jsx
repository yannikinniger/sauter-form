import React from 'react';
import InputRow from '../input/input-row/InputRow'
import './AddressSection.css'

export default class AddressSection extends React.Component {

    render() {
        return (
            <div className="address-section">
                <h2>{this.props.title}</h2>
                <form className={this.props.formName}>
                    <InputRow title="Firma" name="company"/>
                    <InputRow title="Projekt" name="project"/>
                    <InputRow title="Strasse" name="street"/>
                    <div className="twin-form-row">
                        <InputRow title="Ort" name="city"/>
                        <InputRow title="Postleitzahl" name="zipCode"/>
                    </div>
                    <InputRow title="Email" name="email"/>
                </form>
            </div>
        )
    }

}