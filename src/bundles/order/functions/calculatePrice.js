
export default function calculatePrice(item, newQuantity) {
    const basePrice = 570;
    const biggerPrice = 790;

    const dn = item.dn;
    const quantity = newQuantity === undefined ? parseInt(item.quantity, 10) : parseInt(newQuantity, 10);
    if (dn !== null && item.kvs != null) {
        const dnNumber = parseInt(dn.substr(2, dn.length), 10);
        if (dnNumber < 32) {
            return basePrice * quantity;
        } else {
            return biggerPrice * quantity;
        }
    }
}