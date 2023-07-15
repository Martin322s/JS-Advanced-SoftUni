function previousDay(year, month, day) {
    // Creates current date object by provided year, month (Months are 0-based), day
    let currentDate = new Date(year, month - 1, day);

    // Set the previous day, from the provided one
    currentDate.setDate(currentDate.getDate() - 1);

    // Get the year, month and the newly created day
    let previousYear = currentDate.getFullYear();
    let previousMonth = currentDate.getMonth() + 1;
    let previousDay = currentDate.getDate();

    let formattedDate = `${previousYear}-${previousMonth}-${previousDay}`;

    console.log(formattedDate);
}