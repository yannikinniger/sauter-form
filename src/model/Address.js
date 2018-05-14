export class Address {

    requiredProperties = ['company', 'street', 'city', 'zipcode', 'email'];

    constructor(addressObject) {
        const hasRequiredProperties = this.requiredProperties.every(
            property => Address.checkObjectProperty(property, addressObject));
        if (!hasRequiredProperties) {
            throw new Error("Does not have required properties")
        } else {
            this.address = addressObject;
        }
    }

    getAddress() {
        return this.address;
    }

    static checkObjectProperty(property, object) {
        return object[property] !== "";
    }
}

export class EmptyAddress {
    getAddress() {
        return null;
    }
}