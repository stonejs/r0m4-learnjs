function pow (a, n) {
    var result = 0;
    for (var i = 1; i < n; i++){
        result += a*a;
    }
    return result;
};

console.log(pow(2,3));