function daysInMonth(month, year) {
    let date = new Date(year, month, 0);
    let totalDays = date.getDate();
    
    console.log(totalDays);
}