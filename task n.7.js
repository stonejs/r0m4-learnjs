function quotient(highDigit, lowDigit){
    var q = Math.floor(highDigit / lowDigit);
    var r = highDigit%lowDigit;
    return ["quotient : "+q+",   residue : "+r];
};

console.log(quotient(25,4));