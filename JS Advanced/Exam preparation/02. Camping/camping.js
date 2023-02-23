class SummerCamp {
    constructor(organizer, location) {
 
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { child: 150, student: 300, collegian: 500 }
        this.listOfParticipants = [];
    }
 
    registerParticipant(name, condition, money) {
        money = Number(money);

        if (!(Object.keys(this.priceForTheCamp)).includes(condition)) {
            throw new Error(`Unsuccessful registration at the camp.`);
        }
        
        if (this.listOfParticipants.find(el => el.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }
 
        if (this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`;
        }
 
        let person = { name, condition, power: 100, wins: 0 };
        this.listOfParticipants.push(person);
 
        return `The ${name} was successfully registered.`;
    }
 
    unregisterParticipant(name) {
        let currentParticipant = this.listOfParticipants.find(el => el.name === name);
 
        if (!currentParticipant) {
            throw new Error(`The ${name} is not registered in the camp.`);
 
        }
        let index = this.listOfParticipants.indexOf(currentParticipant);
        this.listOfParticipants.splice(index, 1);
 
        return `The ${name} removed successfully.`
 
    }
 
    timeToPlay(typeOfGame, participant1, participant2) {
        let person1 = this.listOfParticipants.find(el => el.name === participant1);
 
        if (typeOfGame === 'WaterBalloonFights') {
            let person2 = this.listOfParticipants.find(el => el.name === participant2);
 
            if (!person1 || !person2) {
                throw new Error('Invalid entered name/s.');
            }
 
            if (person1.condition !== person2.condition) {
                throw new Error('Choose players with equal condition.');
            }
 
            let currentWinner = ''
 
            if (person1.power > person2.power) {
                person1.wins++;
                currentWinner = person1.name;
 
            } else if (person2.power > person1.power) {
                person2.wins++;
                currentWinner = person2.name;
 
            } else {
                return `There is no winner.`;
            }
 
            return `The ${currentWinner} is winner in the game WaterBalloonFights.`;
 
        } else if (typeOfGame === 'Battleship') {
 
            if (!person1) {
                throw new Error(`Invalid entered name/s.`);
            }
            person1.power += 20;
 
            return `The ${participant1} successfully completed the game Battleship.`;
        }
    }
 
    toString() {
 
        let message1 = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;
        this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        let allParticipants = this.listOfParticipants.map(el => `${el.name} - ${el.condition} - ${el.power} - ${el.wins}`).join('\n');
 
        return message1 += allParticipants;
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));
