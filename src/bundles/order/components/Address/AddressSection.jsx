import React from 'react';
import {FieldInput} from '../../../common/Input'

export default class AddressSection extends React.Component {

    getAddressProperty(address, property) {
        return address !== null ? address[property] : "";
    }

    render() {
        console.log(this.props.orderContext.state[this.props.formName]);
        const address = this.props.orderContext.state[this.props.formName];
        return (
            <div className="address-section">
                <h2>{this.props.title}</h2>
                <form className={this.props.formName}>
                    <FieldInput title="Firma" name="company"
                                value={this.getAddressProperty(address, 'company')}/>
                    <FieldInput title="Strasse" name="street"
                                value={this.getAddressProperty(address, 'street')}/>
                    <div className="twin-form-row">
                        <FieldInput title="Postleitzahl" name="zip"
                                    value={this.getAddressProperty(address, 'zip')}/>
                        <FieldInput title="Ort" name="city"
                                    value={this.getAddressProperty(address, 'city')}/>
                    </div>
                </form>
            </div>
        );
    }

}