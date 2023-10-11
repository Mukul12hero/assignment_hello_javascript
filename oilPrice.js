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