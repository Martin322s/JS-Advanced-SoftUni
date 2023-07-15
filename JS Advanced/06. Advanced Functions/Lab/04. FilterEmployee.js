function filterEmployees(input, criteria) {
    let result = [];
    let parsedInput = JSON.parse(input);
    let splittedCriteria = criteria.split('-');

    for (let person of parsedInput) {
        if (person[splittedCriteria[0]] === splittedCriteria[1]) {
            result.push(person);
        }
    }

    result
        .map(x => `${x.first_name} ${x.last_name} - ${x.email}`)
        .forEach((x, i) => console.log(`${i}. ${x}`));
}