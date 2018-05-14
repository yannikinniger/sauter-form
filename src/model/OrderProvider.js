import React from 'react';
import DnKvsMap from "./DnKvsMap";
import PriceService from "../service/PriceService";
import {getArticleNumber} from "../service/ArticleNumberService";
import {Item} from './Item'
import {OrderContext} from '../App'
import {Address, EmptyAddress} from "./Address";

export default class OrderProvider extends React.Component {
    state = {
        kvsOptions: DnKvsMap.getDnKvsMap(2).get('DN15'),
        item: Item(),
        amount: 0,
        deliveryAddress: new EmptyAddress(),
        invoiceAddress: new EmptyAddress(),
    };
    items = [];

    quantityUpdate(newQuantity) {
        if (newQuantity > 0) {
            const newPrice = PriceService.getPrice(this.state.item, newQuantity);
            this.setState(prevState => ({
                item: {
                    ...prevState.item,
                    quantity: newQuantity,
                    price: newPrice
                }
            }));
        }
    }

    render() {
        return (
            <OrderContext.Provider value={{
                state: this.state,
                saveCurrentItem: () => this.items.push(this.state.item),
                getItems: () => this.items,
                updateItem: (property, value) => {
                    if (this.state.item[property] === value) { return; }
                    const newItem = Object.assign({}, this.state.item);
                    newItem[property] = value;
                    newItem.articleNumber = getArticleNumber(newItem);
                    newItem.price = PriceService.getPrice(newItem);

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
    };
}