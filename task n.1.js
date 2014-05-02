// use proper function naming

function swap (a,b) {
    var c = a;
    var a = b;
    var b = c;
    return [a,b];
};

console.log("swap(10,5)", swap(10,5));

// LGTM