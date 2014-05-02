// proper naming

function swap(a,b) {
    var a = a+b;
    var b = a-b;
    a = a - b;
    return [a,b];
};

console.log('swap(10,5)', swap(10,5));


// LGTM

