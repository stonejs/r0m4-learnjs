function fibonacci (n) {
    var a = 1;
    if (n === 0){
        return 0;
    }
    if (n === 1){
        return 1;
    }
    
    var result = [];
    if (n>=2){
        result.push ((a*n-1)+(a*n-2));
    }
    return result;
}; 

console.log(fibonacci(45));