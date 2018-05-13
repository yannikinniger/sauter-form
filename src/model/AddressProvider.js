import React from 'react';
import {Address, EmptyAddress} from "./Address";
import {AddressContext} from '../App'

export default class AddressProvider extends React.Component {
    state = {
        deliveryAddress: new EmptyAddress(),
        invoiceAddress: new EmptyAddress()
    };

    render() {
        return (
            <AddressContext.Provider value={{
                state: this.state,
                setAddress: (name, address) => {
                    console.log(address instanceof Address);
                    if (address instanceof Address) {
                        this.setState({[name]: address});
                    }
                }
            }}>
                {this.props.children}
            </AddressContext.Provider>
        )
    }

}