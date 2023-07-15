const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

function objectFactory(library, orders) {
    let result  = [];

    for (let order of orders) {
        let orderObject = {};
        orderObject.name = order.template.name;

        for (let part of order.parts) {
            orderObject[part] = library[part];
        }
        result.push(orderObject);
    }
    
    return result;
}

const products = objectFactory(library, orders);
console.log(products);