function timeToWalk(steps, footPrint, speedKmH) {
    // Calculates the distance by mulyipling covered steps and the foot print in meters.
    let distance = steps * footPrint;
    
    // Convert the speed in m/s.
    let speed = speedKmH * 1000 / 3600;

    // Calculates the taken rests.
    let rest = Math.floor(distance / 500) * 60;

    // Calculate the time in seconds.
    let time = (distance / speed) + rest;

    // Convert the time in hours, minutes and seconds.
    let hours = Math.floor(time / 3600).toFixed(0).padStart(2, '0');
    let minutes = Math.floor(time / 60).toFixed(0).padStart(2, '0');
    let seconds = (time % 60).toFixed(0).padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);
}