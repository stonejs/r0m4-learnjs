
function pow (a, n) {
    return (n != 1) ? a*pow(a, n-1) : a;
};

console.log(pow(2,10));