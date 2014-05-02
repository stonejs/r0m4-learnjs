function multiply(a, b) {
    var result = 0;
    for (var i = 0; i < b; i++){
        result += a;
    }
    return result;
};
console.log('multiply(9, 113)',multiply(9, 113));

// LGTM