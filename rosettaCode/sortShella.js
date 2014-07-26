
function deliverArrRandNum (x) {
    var arr = [];  

    for (var i = 0; i < x; i++) {
        arr.push(Math.floor(Math.random()*100));
    }
    return arr;
};


var randNums = deliverArrRandNum(16);
console.log("ours:  "+randNums);

function sortEighth (arr) {
    var half = Math.floor(arr.length/2);
    

    for (var i = 0; i < arr.length/2; i++) {

        if(arr[i] > arr[half]) {
            var x = arr[i];
            arr[i] = arr[half];
            arr[half] = x;
            
        }
        half += 1;
    }
    return arr;
}

var firstSorted = sortEighth(randNums);
console.log(firstSorted);



function rulesForSort(a,b) {
    if(a>b) return 1;
    if(a<b) return -1;
};

function compareNum (a) {
    
    var arr = [];
    

    for (var i = 0; i < arguments[0].length; i++) {
        arr[i]=arguments[0][i];
    }
    

        arr.sort(rulesForSort);
        
    return arr;
    
};

function sortFour (arr) {
    

    for (var i = 0 ; i < 4; i++){
        var sortedArrr = compareNum([arr[i],arr[i+4],arr[i+8],arr[i+12]]);
        var inerCount = 0;

        for (var k = i; k < arr.length; k=k+4) {
            arr[k] = sortedArrr[inerCount];
            inerCount++;
        }
        
    }
    return arr;
}


var sortedFour = sortFour (firstSorted);
console.log(sortedFour);

function sortEighthTwo(arr) {
    for (var i = 0; i < 2; i++) {
        var sortedArrr = compareNum([arr[i], arr[i+2], arr[i+4], arr[i+6], arr[i+8], arr[i+10], arr[i+12], arr[i+14], arr[i+16]]);
        var inerCount = 0;

        for (var k = i; k < arr.length; k=k+2) {
            arr[k] = sortedArrr[inerCount];
            inerCount++;
            
        }
    };
    return arr;
};

var secondEighth = sortEighthTwo(sortedFour);
console.log (secondEighth);

function sortInsert (arr, startPos) {
    
    for (var i = startPos; i < arr.length; i++) {
        
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

console.log(sortInsert(secondEighth, 2));