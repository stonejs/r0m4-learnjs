//не понятно что в задаче 1.1.4 основание, а что логарифм.

function pow (a, n) {
    var result = 0;
    for (var i = 1; i < n; i++){
        result += a*a;
    }
    return result;
};

console.log(pow(2,3));