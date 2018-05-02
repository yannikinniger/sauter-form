import getDnKvsMap from '../model/dn-kvs-map'

export const ArticleNumberService = () => {
    const dnKvsMap = getDnKvsMap();
    const valveMap = {2: "VKR0", 3: "BKR0"};
    const kvsMap = {
        1: "F350", 1.6: "F340", 2.5: "F330", 4: "F320", 6.3: "F310", 10: "F300",
    }
};