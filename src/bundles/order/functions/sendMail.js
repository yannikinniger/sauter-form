export default function sendMail(context) {
    const apiUrl = 'https://hlk-common.ch/submit';
    const item = context.state.item;
    const payload = {
        project: context.state.project,
        reference: context.state.reference,
        deliveryAddress: context.state.deliveryAddress,
        invoiceAddress: context.state.invoiceAddress,
        kvs: item.kvs,
        dn: item.dn,
        quantity: item.quantity,
        price: item.price,
        articleNumber: item.articleNumber,
        mailAddress: context.state.email,
        sendCopy: context.state.sendCopy,
    };
    return new Promise(resolve => {
        fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(response => {
            console.log(response);
            resolve(response.status === 200);
        });
    })
}