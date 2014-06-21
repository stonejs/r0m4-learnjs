

function generate(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random()*50));
    }

    return arr;
};




function sort(arr) {
    function compare (a, b) {
        if (a > b){return -1}
            if (a < b){return 1}
            };

    var Arr0 = arr.slice(0, arr.length/2).sort(compare);
    var Arr1 = (arr.slice(arr.length/2, arr.length)).sort(compare);
        return {Arr0 : Arr0, Arr1 : Arr1};
        };


    var output = [];
    var outputLess = [];


function merge(arr0, arr1) {
        
        if (arr0.length === 0 || arr1.length === 0) return;
        
         
        output.push((arguments[0][0] >= arguments[1][0]) ? arr0.shift() : arr1.shift());
        console.log(output);

        //console.log(arguments[1].length);
        (arguments[0][0] <= arguments[1][0]) ? merge(arguments[0], arr1) : merge(arr0, arguments[1]);
        

        return output.concat((arguments[0].length > 0) ? arr0 : arr1);
        
        };




var generation = generate(20);

console.log(generation); 
var slicedArr = sort(generation);
console.log(slicedArr);

console.log(merge(slicedArr.Arr0,slicedArr.Arr1));

