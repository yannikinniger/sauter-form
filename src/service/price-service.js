
export const PriceService = configObject => {
    const basePrice = 570;
    const biggerPrice = 790;

    return {
        getPrice: () => {
            const dn = configObject.getDn();
            if (dn !== null && configObject.getKvs() != null) {
                const dnNumber = parseInt(dn.substr(2,dn.length), 10);
                const amount = parseInt(configObject.getQuantity(), 10);
                if (dnNumber < 32) {
                    return basePrice * amount;
                } else {
                    return biggerPrice * amount;
                }
            }
        }
    }
};