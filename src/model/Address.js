export class Address {

    requiredProperties = ['company', 'street', 'city', 'zip'];

    constructor(args) {
        if (!this.hasRequiredProperties(args)) {
            throw new Error('does not have required properties')
        } else {
            this.company = args['company'];
            this.street = args['street'];
            this.city = args['city'];
            this.zip = args['zip'];
        }
    }

    hasRequiredProperties(args) {
        return this.requiredProperties.every(property => args[property] !== "")
    }

    static empty() {
        let emptyAddress = {};
        emptyAddress.prototype = Address.prototype;
        return emptyAddress
    }

}