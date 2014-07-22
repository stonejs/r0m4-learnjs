
function deliverArrRandNum (x) {
    var arr = [];  

    for (var i = 0; i < x; i++) {
        arr.push(Math.floor(Math.random()*100));
    }
    return arr;
};


var randNums = deliverArrRandNum(100);
console.log(randNums);


function findMin(arr){
        var minNum = 1000;
        var output = {};
        for (var i = 0; i < arr.length; i++) {
        
             if (arr[i] <= minNum) {
                minNum = arr[i];
                output.znachen = arr[i];
                
             }
        }
        return output; 
    };



function sortPick (x) {
    
    for (var i = 0; i < x.length-1; i++) {
        var minCifra = findMin(x.slice(i, x.length));
        
        for (var k = 0; k < x.length; k++) {
            if (x[k] == minCifra.znachen) {
                minCifra.position = k;
            }
        }   

        
        x[minCifra.position]=x[i];
        x[i]= minCifra.znachen;       
    }
    return x;    
}

console.log(sortPick(randNums));