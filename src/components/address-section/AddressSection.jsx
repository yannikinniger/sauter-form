import React from 'react';
import InputRow from '../input/input-row/InputRow'
import {OrderContext} from '../../App';

export default class AddressSection extends React.Component {

    getAddressProperty(address, property) {
        return address !== null ? address[property] : "";
    }

    render() {
        return (
            <div className="address-section">
                <h2>{this.props.title}</h2>
                <form className={this.props.formName}>
                    <OrderContext.Consumer>
                        {context => {
                            const address = context.getAddress(this.props.formName);
                            return (
                                <React.Fragment>
                                    <InputRow title="Firma" name="company"
                                              value={this.getAddressProperty(address, 'company')}/>
                                    <InputRow title="Projekt" name="project"
                                              value={this.getAddressProperty(address, 'project')}/>
                                    <InputRow title="Strasse" name="street"
                                              value={this.getAddressProperty(address, 'street')}/>
                                    <div className="twin-form-row">
                                        <InputRow title="Ort" name="city"
                                                  value={this.getAddressProperty(address, 'city')}/>
                                        <InputRow title="Postleitzahl" name="zip"
                                                  value={this.getAddressProperty(address, 'zip')}/>
                                    </div>
                                </React.Fragment>
                            )
                        }}
                    </OrderContext.Consumer>
                </form>
            </div>
        )
    }

}