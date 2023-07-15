class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        } else {
            let plant = {
                plantName: plantName,
                spaceRequired: spaceRequired,
                ripe: false,
                quantity: 0
            };

            this.plants.push(plant);
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`;
        }
    }

    ripenPlant(plantName, quantity) {

        if (!this.plants.some(x => x.plantName === plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        for (let plant of this.plants) {
            if (plant.ripe === true && plant.plantName === plantName) {
                throw new Error(`The ${plantName} is already ripe.`);
            }
        }

        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        } else {
            for (let x of this.plants) {
                if (x.plantName === plantName) {
                    x.ripe = true;
                    x.quantity += quantity;

                    if (x.quantity === 1) {
                        return `${quantity} ${plantName} has successfully ripened.`;
                    }

                    if (x.quantity > 1) {
                        return `${quantity} ${plantName}s have successfully ripened.`;
                    }
                }
            }
        }
    }

    harvestPlant(plantName) {
        if (!this.plants.some(x => x.plantName === plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        for (let plant of this.plants) {
            if (plant.ripe === false && plant.plantName === plantName) {
                throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
            }
            if (plant.ripe === true && plant.plantName === plantName) {
                let index = this.plants.indexOf(this.plants.find(x => x.plantName));
                let plantToRemove = this.plants.splice(index, 1);
                this.storage.push(plantToRemove);
                this.spaceAvailable += this.spaceRequired;

                return `The ${plantName} has been successfully harvested.`;
            }
        }
    }
}