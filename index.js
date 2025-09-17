// Code your solution in this file!



function distanceFromHqInBlocks(customerLocation){
    const headQuartersLocation = 42
    return Math.abs(customerLocation - headQuartersLocation);
}

function distanceFromHqInFeet(customerLocation){
    return distanceFromHqInBlocks(customerLocation) * 264;
}

function distanceTravelledInFeet(startBlock, destinationBlock){

    return Math.abs((destinationBlock - startBlock) * 264);
}

function calculatesFarePrice(startBlock, destinationBlock) {
    let distanceForFare = ((Math.abs((destinationBlock - startBlock) * 264)))
    if (distanceForFare <= 400) {
        return 0 
    } else if (distanceForFare >= 401 && distanceForFare <= 2000){
        return 0.02 * (distanceForFare - 400)
    } else if (distanceForFare >= 2001 && distanceForFare <= 2500){
        return 25
    } else {
        return `cannot travel that far`
    }
  }

