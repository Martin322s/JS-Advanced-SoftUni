function tickets(tickets, criteria) {
    let result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let ticket of tickets) {
        let [destination, price, status] = ticket.split('|');
        price = Number(price);
        result.push(new Ticket(destination, price, status));
    }

    result.sort((a, b) => {
        if (criteria === "price") {
            return a[criteria] - b[criteria];
        } else {
            return a[criteria].localeCompare(b[criteria]);
        }
    });

    return result;
}