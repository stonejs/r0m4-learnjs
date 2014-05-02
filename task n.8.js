function factorial (x){

    // эта проверка происходит в
    // начале следующего for, поэтому здесь ее можно спокойно
    // закомментить
    if (x === 0) {
        return 1;
    }

    var result = 1;

    // если x===0, то в for не заходим
    for (i = x; i > 0; i--) { //Действием i=0 перетирается i из глобального контекста.
        result *= i;
    }
    return result;
};

console.log('factorial(7)', factorial(7));


// see comments. Otherwise, LGTM