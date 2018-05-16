export default function sendMail(items, deliveryAddress, invoiceAddress, email) {
    const apiUrl = 'https://hooks.zapier.com/hooks/catch/3247473/a6fuf9/';
    const payload = {
        item: items,
        deliveryAddress: deliveryAddress,
        invoiceAddress: invoiceAddress,
        email: email,
    };
    return fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(payload)
    }).then(response => {
        return response.status === 200;
    });
}