
function deliverArrRandNum (x) {
    var arr = [];  

    for (var i = 0; i < x; i++) {
        arr.push(Math.floor(Math.random()*100));
    }
    return arr;
};


var randNums = deliverArrRandNum(20);
console.log(randNums);


function minDigit (arr) {
    var minDigit = 1000;
    var output = {};

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minDigit) {
            minDigit = arr[i];
            output.val = arr[i];
            output.pos = i;
            
        }
    }
    return output;
};
console.log(minDigit(randNums));


function bubble (arr) {
    
    for(var k = 0; k < arr.length; k++){
        var minimDigit = minDigit(arr.slice(k, arr.length));

        for(var c = 0; c < arr.length; c++){
            if(minimDigit.val===arr[c]) {
                minimDigit.pos = c;
                break;
            }
        }


            for(var i = minimDigit.pos; i != 0; i-- ){
                if(arr[i]>arr[i-1]){
                    break;
                }
                var t = arr[i-1];
                arr[i-1]=arr[i];
                arr[i]=t;
                console.log(arr);
            }    
    }
    return arr;
}

console.log(bubble(randNums));