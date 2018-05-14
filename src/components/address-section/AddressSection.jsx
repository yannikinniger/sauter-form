import React from 'react';
import InputRow from '../input-row/InputRow'
import './AddressSection.css'
import {OrderContext} from '../../App';
import formExtract from 'form-extract'
import {Address} from "../../model/Address";
import { withRouter } from 'react-router-dom'

class AddressSection extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.context.state);
        const formData = formExtract(`.${this.props.formName}`);
        try {
            const address = new Address(formData);
            this.context.setAddress(this.props.formName, address);
            console.log(this.context.state);
            this.props.history.push('/checkout');
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
                <OrderContext.Consumer>
                    {context => {this.context = context}}
                </OrderContext.Consumer>
                <h2>{this.props.title}</h2>
                <form onSubmit={this.handleSubmit.bind(this)} className={this.props.formName}>
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

export default withRouter(AddressSection);