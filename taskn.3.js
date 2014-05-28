function pow (a, n) {
    var result =a;
    for (var i = 1; i < n; i++){
        result *= a;
    }
    return result;
};

console.log(pow(2,10));