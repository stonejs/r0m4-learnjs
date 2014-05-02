function hi (a,b) {
    var c = a;
    var a = b;
    var b = c;
    return [a,b];
};

console.log (hi(10,5));