export const Configuration = () => {
    const data = {
        dn: null,
        valveAmount: null,
        kvs: null,
        quantity: 1
    };
    const listeners = [];

    const notifyListeners = () => listeners.forEach(listener => listener(data));

    const setValue = (key, value) => {
        if (data[key] !== undefined && value !== data[key]) {
            data[key] = value;
            notifyListeners();
        }
    };

    return {
        registerListener: callback => listeners.push(callback),
        setDn: newDn => setValue('dn', newDn),
        getDn: () => data['dn'],
        setValveAmount: newValveAmount => setValue('valveAmount', newValveAmount),
        getValveAmount: () => data['valveAmount'],
        setKvs: newKvs => setValue('kvs', newKvs),
        getKvs: () => data['kvs'],
        setValue: (key, value) => setValue(key, value),
        getQuantity: () => data['quantity'],
        setQuantity: newQuantity => {
            if(parseInt(newQuantity, 10) > 0) {
                setValue('quantity', newQuantity)
            }
        },
        notifyListeners: () => notifyListeners(),
    }
};
