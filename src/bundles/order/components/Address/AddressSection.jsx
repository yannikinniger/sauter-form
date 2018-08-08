import React from 'react';
import {FieldInput} from '../../../common/Input'

export default class AddressSection extends React.Component {

    getAddressProperty(address, property) {
        return address !== null ? address[property] : "";
    }

    render() {
        const address = this.props.orderContext.state[this.props.formName];
        return (
            <div className="address-section">
                <h2>{this.props.title}</h2>
                <form className={this.props.formName}>
                    <FieldInput title={this.props.text.company} name="company"
                                value={this.getAddressProperty(address, 'company')}/>
                    <FieldInput title={this.props.text.street} name="street"
                                value={this.getAddressProperty(address, 'street')}/>
                    <div className="twin-form-row">
                        <FieldInput title={this.props.text.zip} name="zip"
                                    value={this.getAddressProperty(address, 'zip')}/>
                        <FieldInput title={this.props.text.city} name="city"
                                    value={this.getAddressProperty(address, 'city')}/>
                    </div>
                </form>
            </div>
        );
    }

}