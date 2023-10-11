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