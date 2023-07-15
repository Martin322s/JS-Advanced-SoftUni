function fruit(fruitType, weightGr, price) {
    let weightKg = weightGr / 1000;
    let totalPrice = weightKg * price;
    
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruitType}.`);
}