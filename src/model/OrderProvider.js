import React from 'react';
import DnKvsMap from "./DnKvsMap";
import PriceService from "../service/PriceService";
import {getArticleNumber} from "../service/ArticleNumberService";
import {Item} from './Item'
import {OrderContext} from '../App'
import {Address} from "./Address";

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
                getItem: () => this.state.item,
                clearItems: () => this.setState({item: Item()}),
                updateItem: (property, value) => {
                    if (this.state.item[property] === value) {
                        return;
                    }
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
                setEmail: newEmail => this.setState({email: newEmail}),
                setProject: project => this.setState({project: project}),
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

}