
export default function sendMail(items, deliveryAddress, invoiceAddress) {
    const apiUrl = "https://hooks.zapier.com/hooks/catch/3247473/a3cp17/";
    const payload = {
        items: items,
        deliveryAddress: deliveryAddress,
        invoiceAddress: invoiceAddress,
    };
    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(payload)
    }).then(response => console.log(response));
}