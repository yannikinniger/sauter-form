export default function sendMail(item, deliveryAddress, invoiceAddress, email, sendCopy) {
    const apiUrl = 'http://localhost:4567/order';
    const payload = {
        deliveryAddress: deliveryAddress,
        invoiceAddress: invoiceAddress,
        kvs: item.kvs,
        dn: item.dn,
        quantity: item.quantity,
        price: item.price,
        articleNumber: item.articleNumber,
        mailAddress: email,
        sendCopy: sendCopy
    };
    return new Promise(resolve => {
        fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(response => {
            resolve(response.status === 200);
        });
    })
}