function radianToDegree(radian) {
    if (typeof radian === 'number') {
        const oneRadianEqualToDegree = 57.3;
        const degree = radian * oneRadianEqualToDegree;
        return degree;
    }
    else {
        return 'please type a number';
    }
}

const result = radianToDegree(5);
console.log(result);




function isJavaScriptFile(fileName) {

    if (typeof fileName === 'string') {
      if (fileName.endsWith('.js')) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return 'please type a string';
    }
  }
  
  const fileName = 'oilPrice.js';
  const checkFile = isJavaScriptFile(fileName);
  console.log(checkFile);




  function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    if (typeof dieselQuantity === 'number' && typeof petrolQuantity === 'number' && typeof octaneQuantity === 'number') {
        const perLitreDieselPrice = 100;
        const perLitrePetrolPrice = 150;
        const perLitreOctanePrice = 200;

        const totalDieselPrice = dieselQuantity * perLitreDieselPrice;
        const totalPetrolPrice = petrolQuantity * perLitrePetrolPrice;
        const totalOctanePrice = octaneQuantity * perLitreOctanePrice;

        const totalOilPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
        return totalOilPrice;
    }
    else {
        return 'please type a number';
    }
}

const totalPrice = oilPrice(2, 4, 5);
console.log(totalPrice);




function publicBusFare(people) {
    const perBusCapacity = 50;
    const perMicroCapacity = 15;

    const publicBusPrice = 200;

    const busRemaining = people % 50;
    const microRemaining = busRemaining % 15;

    const publicBusJatri = microRemaining;

    const totalPublicBusPrice = publicBusJatri * publicBusPrice;

    if (typeof people === 'number') {
        return totalPublicBusPrice;
    }
    else {
        return 'please type a number';
    }
}

const publicBusCost = publicBusFare(118);
console.log(publicBusCost);




function isBestFriend(friend1, friend2){
    if(typeof friend1 === 'object' && typeof friend2 === 'object'){
        if(friend1.name == friend2.friend && friend2.name == friend1.friend){
            return true;
           }
           else{
               return false;
           }
    }
    else{
        return 'please type object';
    }
}
const friendOne = {name: 'tom', friend: 'mukul'};
const friendTwo = {name: 'mukul', friend: 'tom'};

const check = isBestFriend(friendOne, friendTwo);
console.log(check);






















