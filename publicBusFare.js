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