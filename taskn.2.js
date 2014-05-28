function replace (a,b) {
    var a = a+b;
    var b = a-b;
    a = a - b;
    return [a,b];
};

console.log (replace(10,5));