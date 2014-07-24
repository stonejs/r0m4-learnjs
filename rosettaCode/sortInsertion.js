
function deliverArrRandNum (x) {
    var arr = [];  

    for (var i = 0; i < x; i++) {
        arr.push(Math.floor(Math.random()*100));
    }
    return arr;
};


var randNums = deliverArrRandNum(20);
//console.log(randNums);

function minDig (arr) {
    var minDig = 100;
    var output = {};

        for (var k = 0; k < arr.length; k++) {
            
            if (arr[k] <= minDig) {
                minDig = arr[k];
                output.val = arr[k];
                output.pos = k;
            } 
        };
        return output;
};


//console.log(minDig(randNums));




function sortedHalfArr (arr) {
    

    for (var i = 0; i < (arr.length/2)-1; i++) {
       var workChar = minDig(arr.slice(i, (arr.length/2)));
       
       if (workChar.val === arr[i]){continue;};

           workChar.pos = workChar.pos+i;
           arr[workChar.pos] = arr[i];
           arr[i] = workChar.val;
           
    }
    return arr;    
};


var HalfArrStuff = sortedHalfArr(randNums);
console.log(sortedHalfArr(randNums));




function sortInsert (arr) {
    
    for (var i = arr.length/2; i < arr.length; i++) {
        
        for(var j = i; j!=0; j--){

            if (arr[j] < arr[j-1]) {
                var x = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = x;
            
            }

        }
        
    }
    return arr;
}

console.log(sortInsert(HalfArrStuff));
