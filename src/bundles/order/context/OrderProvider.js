import React from 'react';
import {calculatePrice, getArticleNumber} from '../functions';
import {Item, Address, DnKvsMap} from '../model'
import OrderContext from './OrderContext'

export default class OrderProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            kvsOptions: DnKvsMap.getDnKvsMap(2).get('DN15'),
            item: Item(),
            deliveryAddress: Address.empty(),
            invoiceAddress: Address.empty(),
            email: "",
            project: "",
            reference: ""
        };
    }


    render() {
        return (
            <OrderContext.Provider value={{
                state: this.state,
                setState: newState => this.setState(newState),
                updateItem: (property, value) => {
                    if (this.state.item[property] === value) {
                        return;
                    }
                    const newItem = Object.assign({}, this.state.item);
                    newItem[property] = value;
                    newItem.articleNumber = getArticleNumber(newItem);
                    newItem.price = calculatePrice(newItem);

                    this.setState({
                        item: newItem,
                        kvsOptions: DnKvsMap.getDnKvsMap(newItem.valveAmount).get(newItem.dn)
                    });
                },
                setAddress: (name, address) => {
                    if (address instanceof Address) {
                        this.setState({[name]: address})
                    }
                },
                getAddress: name => this.state[name],
                increaseQuantity: () => {
                    const newQuantity = this.state.item.quantity + 1;
                    this.quantityUpdate(newQuantity)
                },
                decreaseQuantity: () => {
                    const newQuantity = this.state.item.quantity - 1;
                    this.quantityUpdate(newQuantity)
                },
            }}>
                {this.props.children}
            </OrderContext.Provider>
        )
    }

    quantityUpdate(newQuantity) {
        if (newQuantity > 0) {
            const newPrice = calculatePrice(this.state.item, newQuantity);
            this.setState(prevState => ({
                item: {
                    ...prevState.item,
                    quantity: newQuantity,
                    price: newPrice
                }
            }));
        }
    }

}