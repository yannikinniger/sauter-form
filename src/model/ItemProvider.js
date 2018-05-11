import React from 'react';
import DnKvsMap from "./dn-kvs-map";
import PriceService from "../service/price-service";
import {getArticleNumber} from "../service/article-number-service";
import {Item} from './Item'
import {ItemContext} from '../App'

export default class ItemProvider extends React.Component {
    state = {
        kvsOptions: DnKvsMap.getDnKvsMap(2),
        item: Item(),
        amount: 0,
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
            <ItemContext.Provider value={{
                state: this.state,
                saveCurrentItem: () => this.items.push(this.state.item),
                getItems: () => this.items,
                updateItem: (property, value) => {
                    const newItem = Object.assign({}, this.state.item);
                    newItem[property] = value;
                    newItem.articleNumber = getArticleNumber(this.state.item);
                    newItem.price = PriceService.getPrice(this.state.item);
                    this.setState({
                        item: newItem,
                        kvsOptions: DnKvsMap.getDnKvsMap(this.state.item.valveAmount).get(this.state.item.dn)
                    });
                },
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
            </ItemContext.Provider>
        )
    }
}