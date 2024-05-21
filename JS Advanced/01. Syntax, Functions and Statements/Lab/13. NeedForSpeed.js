function solve(input) {
    let carsCount = Number(input.shift());
    let carsArr = input.splice(0, carsCount).map(x => {
        let [brand, mileageString, fuelString] = x.split('|');
        let mileage = Number(mileageString);
        let fuel = Number(fuelString);

        return {
            brand,
            mileage,
            fuel
        };
    });

    let command = input.shift();

    while (command !== 'Stop') {
        let carInfo = command.split(' : ');

        switch (carInfo[0]) {
            case 'Drive': {
                let car = carsArr.find(x => x.brand === carInfo[1]);
                let index = carsArr.indexOf(car);
                let distance = Number(carInfo[2]);
                let fuel = Number(carInfo[3]);

                if (car.fuel < fuel) {
                    console.log('Not enough fuel to make that ride');
                } else {
                    car.fuel -= fuel;
                    car.mileage += distance;
                    console.log(`${car.brand} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                    if (car.mileage >= 100000) {
                        console.log(`Time to sell the ${car.brand}!`);
                        carsArr.splice(index, 1);
                    } else {
                        carsArr.splice(index, 1, car);
                    }
                }
                break;
            }

            case 'Refuel': {
                let car = carsArr.find(x => x.brand === carInfo[1]);
                let index = carsArr.indexOf(car);
                let fuel = Number(carInfo[2]);

                let fuelToRefill = Math.min(75 - car.fuel, fuel);
                car.fuel += fuelToRefill;

                console.log(`${car.brand} refueled with ${fuelToRefill} liters`);
                carsArr.splice(index, 1, car);
                break;
            }

            case 'Revert': {
                let car = carsArr.find(x => x.brand === carInfo[1]);
                let index = carsArr.indexOf(car);
                let kilometers = Number(carInfo[2]);

                if (car.mileage - kilometers < 10000) {
                    car.mileage = 10000;
                } else {
                    car.mileage -= kilometers;
                    console.log(`${car.brand} mileage decreased by ${kilometers} kilometers`);
                }

                carsArr.splice(index, 1, car);
                break;
            }
        }

        command = input.shift();
    }

    carsArr.forEach(car => {
        console.log(`${car.brand} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fuel} lt.`);
    });
}