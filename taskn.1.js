function replace (a,b) {
    var c = a;
    var a = b;
    var b = c;
    return [a,b];
};

console.log (replace(10,5));