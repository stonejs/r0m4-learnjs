function quotient(highDigit, lowDigit){
    var q = Math.floor(highDigit / lowDigit);
    var r = highDigit%lowDigit;
    return ["quotient : "+q+",   residue : "+r];
    // why return string as array?
    // use either [q,r] or 'q, r'
    // array is more handy for robotic usage
    // string is probably more readable by humans
};

console.log('quotient(25,4)', quotient(25,4));