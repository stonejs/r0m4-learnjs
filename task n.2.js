function hi (a,b) {
    var a = a+b;
    var b = a-b;
    a = a - b;
    return [a,b];
};

console.log (hi(10,5));