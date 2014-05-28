function factorial (x){
    if (x === 0) {
        return 1;
    }

    var result = 1;
    for (i = x; i > 0; i--) {
        result *= i;
    }
    return result;
};

console.log(factorial(7));