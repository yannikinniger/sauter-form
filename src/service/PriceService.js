
export default class PriceService {
    static basePrice = 570;
    static biggerPrice = 790;

    static getPrice = (item, newQuantity) => {
        const dn = item.dn;
        const quantity = newQuantity === undefined ? parseInt(item.quantity, 10) : parseInt(newQuantity, 10);
        if (dn !== null && item.kvs != null) {
            const dnNumber = parseInt(dn.substr(2, dn.length), 10);
            if (dnNumber < 32) {
                return PriceService.basePrice * quantity;
            } else {
                return PriceService.biggerPrice * quantity;
            }
        }
    }
}