import DnKvsMap from '../model/dn-kvs-map'

export const getArticleNumber = configuration => {
    const valveAmount = configuration.valveAmount;
    const dn = configuration.dn;

    const dnKvsMap = DnKvsMap.getDnKvsMap(valveAmount);
    const position = dnKvsMap.get(dn).indexOf(configuration.kvs);

    let articleNumber = "";
    if (valveAmount === '2') {
        const twoValveFactory = TwoValveFactory();
        articleNumber = twoValveFactory.constructArticleNumber(dn, position)
    } else if (valveAmount === '3') {
        const threeValveFactory = ThreeValveFactory();
        articleNumber = threeValveFactory.constructArticleNumber(dn, position)
    }

    const dnNumber = parseInt(dn.substr(2, dn.length), 10);
    if (dnNumber < 32) {
        articleNumber += "/AKM105F120";
    } else {
        articleNumber += "/AKM115F120";
    }
    return articleNumber;
};

const TwoValveFactory = () => {
    const prefix = "VKR0";
    const suffix = "-FF";
    const dn15Map = ["F350", "F340", "F330", "F320", "F310", "F300"];
    const dnOtherMap = ["F320", "F310", "F300"];

    const getMiddlePart = (dn, position) => {
        if (dn === 'DN15') {
            return dn15Map[position];
        } else {
            return dnOtherMap[position];
        }
    };
    
    return {
        constructArticleNumber: (dn, position) => {
            const dnNumber = dn.substr(2, dn.length);
            return prefix + dnNumber + getMiddlePart(dn, position) + suffix;
        }
    }
};

const ThreeValveFactory = () => {
    const prefix = "BKR0";
    const suffix = "-FF";
    const dn15Map = ["F340", "F330", "F320", "F310"];
    const dn20Map = ["F320", "F310"];
    const dnOther = "F310";

    const getMiddlePart = (dn, position) => {
        if (dn === 'DN15') {
            return dn15Map[position];
        }else if (dn === 'DN20'){
            return dn20Map[position];
        } else {
            return dnOther;
        }
    };

    return {
        constructArticleNumber: (dn, position) => {
            const dnNumber = dn.substr(2, dn.length);
            return prefix + dnNumber + getMiddlePart(dn, position) + suffix;
        }
    }
};