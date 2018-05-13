import React from 'react';
import InputRow from '../input-row/InputRow'
import './AddressSection.css'
import {AddressContext} from '../../App';
import formExtract from 'form-extract'
import {Address} from "../../model/Address";

export default class AddressSection extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        const formData = formExtract(`.${this.props.formName}`);
        try {
            const address = new Address(formData);
            this.context.setAddress(this.props.formName, address);
        } catch (error) {
            Object.entries(formData)
                .filter(([key, value]) => value === '')
                .forEach(([key, value]) => {
                    const elements = document.getElementsByName(key);
                    elements.forEach(element => {
                        element.classList.add('error');
                        element.placeholder = "Benötigt";
                    })
                })
        }
    }

    render() {
        return (
            <div className="address-section">
                <AddressContext.Consumer>
                    {context => {this.context = context}}
                </AddressContext.Consumer>
                <h2>{this.props.title}</h2>
                <form onSubmit={this.handleSubmit} className={this.props.formName}>
                    <InputRow title="Firma" name="company"/>
                    <InputRow title="Projekt" name="project"/>
                    <InputRow title="Strasse" name="street"/>
                    <div className="twin-form-row">
                        <InputRow title="Ort" name="city"/>
                        <InputRow title="Postleitzahl" name="zipCode"/>
                    </div>
                    <InputRow title="Email" name="email"/>
                    <button name="submit">send</button>
                </form>
            </div>
        )
    }

}