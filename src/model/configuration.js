export const Configuration = () => {
    const data = {
        dn: null,
        valveAmount: null,
        kvs: null,
        amount: 1
    };
    const listeners = [];

    const notifyListeners = () => listeners.forEach(listener => listener(data));

    return {
        registerListener: callback => listeners.push(callback),
        setDn: newDn => {
            if (newDn === data['dn']) { return }
            data['dn'] = newDn;
            notifyListeners();
        },
        getDn: () => data['dn'],
        setValveAmount: newValveAmount => {
            if (newValveAmount === data['valveAmount']) { return }
            data['valveAmount'] = newValveAmount;
            notifyListeners();
        },
        getValveAmount: () => data['valveAmount'],
        setKvs: newKvs => {
            if (newKvs === data['kvs']) { return }
            data['kvs'] = newKvs;
            notifyListeners();
        },
        getKvs: () => data['kvs'],
        setValue: (key, value) => {
            if (data[key] !== undefined && value !== data[key]) {
                data[key] = value;
                notifyListeners();
            }
        },
        notifiyListeners: () => notifyListeners(),
    }
};
