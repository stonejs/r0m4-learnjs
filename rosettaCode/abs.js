/*А тебе нужно вывести для того ввода ([[1,2],[3,4],[5,6],[7,8]]) восемь
строк, в каждой по три индекса.
Давай я тебе их руками покажу:

[[1,3,5,7],
 [1,3,5,8],
 [1,3,6,7],
 [1,3,6,8],
 [1,4,5,7],
 [1,4,5,8],
 [1,4,6,7],
 [1,4,6,8],
 [2,3,5,7],
 [2,3,5,8],
 [2,3,6,7],
 [2,3,6,8],
 [2,4,5,7],
 [2,4,5,8],
 [2,4,6,7],
 [2,4,6,8]]


[[0,0,0,0],    
 [0,0,0,1],
 [0,0,1,0],
 [0,0,1,1],
 [0,1,0,0],
 [0,1,0,1],
 [0,1,1,0],
 [0,1,1,1],
 [1,0,0,0],
 [1,0,0,1],
 [1,0,1,0],
 [1,0,1,1],
 [1,1,0,0],
 [1,1,0,1],
 [1,1,1,0],
 [1,1,1,1]]
 */

var bukvi = [["1","2"], ["3","4","5"], ["6","7"], ["8","9"]];
//var bukvi = [["a","b","c"], ["bb","cc"], ["dd","e"]];
var cifri0 = [[1,2]];

var cifridva = [[1,2], [3,4]];

var cifri = [[1,2], [3,4], [5,6],[7,8]];

var cifri2 = [[1,2], [3,4], [5,6], [7,8],[9,10]];


function variate(arr) {
    if (arr.length === 0) return "Incorrect Input";
    if (arr.length === 1) return [[arr[0][0]],[arr[0][1]]]; //вот он !!! Базис рекурсивной функции :):):):)
    

        var output = [];
        var m = (arr.slice(0, arr.length));
        

        for (var i = 0; i < m.length; i++){
          

            for (var k = 0; k < m[i].length; k++) {
                var t = [arr[0][0]].concat(m[i][k]);
                output.push(t);

            };

        };

        for (var i = 0; i < m.length; i++) {
            

            for (var j = 0; j < m[i].length; j++) {
                var k = [arr[0][1]].concat(m[i][j]);
                output.push(k);
            
            };

        };  

        variate(arr.slice(0, arr.length-1));
        
        return   output;

       

};
console.log(variate(cifri2));



function idx(n){
    if (n===0)return "Incorrect Input";
    if (n===1)return[[0],[1]];

    //idx(n-1)+idx(n-2);

    var output = [];
    var m = idx(n-1);
    

    for (var i = 0; i < m.length; i++) {
        var t = [0].concat(m[i]);
        output.push(t);    
    };

    for (var i = 0; i < m.length; i++) {
        var k = [1].concat(m[i]);
        output.push(k);
    }

    return   output;

    

}

//console.log(idx(5));


function idxAdvan(n) {
      var output = [];
    var m = idx(n);
    

    for (var i = 0; i < m.length; i++) {
        var t = [0].concat(m[i]);
        output.push(t);    
    };

    for (var i = 0; i < m.length; i++) {
        var k = [1].concat(m[i]);
        output.push(k);
    }

    return   output;
};

//console.log(idxAdvan(2));



function idx1(arr) {
    return [[0],[1]];
};



function idx2(arr) {
    var output = [];
    var m = idx1();
    

    for (var i = 0; i < m.length; i++) {
        var t = [0].concat(m[i]);
        output.push(t);    
    };

    for (var i = 0; i < m.length; i++) {
        var k = [1].concat(m[i]);
        output.push(k);
    }

    return   output;
};


function idx3(arr) {
    var output = [];
    var m = idx2();

    for (var i = 0; i < m.length; i++) {
        var t = [0].concat(m[i]);
        output.push(t);
    };

    for (var i = 0; i < m.length; i++) {
        var k = [1].concat((m[i]));
        output.push(k);
    }

    return output;
}


//console.log(idx3(cifri));

function idx4(arr) {
    var output = [];
    var m = idx3();

    for (var i = 0; i < m.length; i++) {
        var t = [0].concat(m[i]);
        output.push(t);
    };

    for (var i = 0; i < m.length; i++) {
        var k = [1].concat(m[i]);
        output.push(k);
    }
    return output;
}

//console.log(idx4(cifri));


function idxN(n) {
    if (n===1) return arr[1];
    if (n===0) return arr[0];

    //idxN(arr.slice(0, length-2).concat(idxN(arr.slice(0, length-3))));

    var output = [];
    
    

    var m = idx4();
    

    for (var i = 0; i < m.length; i++) {
        var t = [0].concat(m[i]);
        output.push(t);
    };

    for (var i = 0; i < m.length; i++) {
        var k = [1].concat(m[i]);
        output.push(k);
    }
    
    return output;
}

//console.log(idxN(cifri));




function numeric(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i);
    }
}

//numeric(cifri);






















function nomerArr (arr) {
    
    var matrix = [];

    for(var i=0; i<arr.length; i++) {
        matrix[i] = [];

        for(var j=0; j<arr[i].length; j++) {
            
            matrix[i][j]=arr[i][j];
            
        }
    };

    


    
    return matrix;
}

//console.log(nomerArr(cifri));








function vivod (arr) {
    var output = [];
    var array = [];
    for ( var i = 0; i < arr.length; i++) {
        
        array.push(arr[i][0]);
    }

    output.push(array);
    array = [];

    for (var i = 0; i < arr.length; i++) {
        if (i != arr.length -1 ) {
            array.push(arr[i][0]);
            

        } 
            if (i===arr.length-1){ 
            array.push(arr[i][1]);
            

            }

    };

    output.push(array);
    array = [];

    for (var i = 0; i < arr.length; i++) {
        if (i != arr.length -2 ) {
            array.push(arr[i][0]);
            

        } 
            if (i===arr.length-2){ 
            array.push(arr[i][1]);
            

            }

    };

    output.push(array);
    array = [];

    for (var i = 0; i < arr.length; i++) {
        if (i != arr.length -2 && i != arr.length -1) {
            array.push(arr[i][0]);
            

        } 
            if (i === arr.length -2 || i === arr.length -1){ 
            array.push(arr[i][1]);
            

            }

    };

    output.push(array);
    array = [];


    for (var i = 0; i < arr.length; i++) {
        if (i != arr.length -3 ) {
            array.push(arr[i][0]);
            

        } 
            if (i === arr.length -3){ 
            array.push(arr[i][1]);
            

            }

    };

    output.push(array);
    array = [];

    for (var i = 0; i < arr.length; i++) {
        if (i != arr.length -3 && i != arr.length -1 ) {
            array.push(arr[i][0]);
            

        } 
            if (i === arr.length -3 || i === arr.length - 1){ 
            array.push(arr[i][1]);
            

            }

    };

    output.push(array);
    array = [];
 

    for (var i = 0; i < arr.length; i++) {
        if (i != arr.length -3 && i != arr.length -2 ) {
            array.push(arr[i][0]);
            

        } 
            if (i === arr.length -3 || i === arr.length - 2){ 
            array.push(arr[i][1]);
            

            }

    };

    output.push(array);
    array = [];


    for (var i = 0; i < arr.length; i++) {
        if (i != arr.length -3 && i != arr.length -1 ) {
            array.push(arr[i][0]);
            

        } 
            if (i === arr.length -3 || i === arr.length - 1){ 
            array.push(arr[i][1]);
            

            }

    };

    output.push(array);
    array = [];
 


    return output;
}

//console.log(vivod(cifri));





















function simple(arr) {
    var output = [];



var c = Array;

for( var i = 0, a = c(9); i < 9; a[i] = c(9), i++ );

//console.log( a.join(",") );

};

//simple();



function recursion(arr) {
    var output = [];
    var semiArr = [];

    semiArr.push(arr[0][0],arr[1][0],arr[2][0],arr[3][0]);
    output.push(semiArr);
    semiArr = [];

    semiArr.push(arr[0][0],arr[1][0],arr[2][0],arr[3][1]);
    output.push(semiArr);
    semiArr = [];

    semiArr.push(arr[0][0],arr[1][0],arr[2][1],arr[3][0]);
    output.push(semiArr);
    semiArr = [];

    semiArr.push(arr[0][0],arr[1][0],arr[2][1],arr[3][1]);
    output.push(semiArr);
    semiArr = [];

    semiArr.push(arr[0][0],arr[1][1],arr[2][0],arr[3][0]);
    output.push(semiArr);
    semiArr = [];

    semiArr.push(arr[0][0],arr[1][1],arr[2][0],arr[3][1]);
    output.push(semiArr);
    semiArr = [];



    //console.log(output);
};

//(recursion(bukvi));








function arrSorter (arr) {
    var output = [];
    semiArr = [];

    var matrix = [];

    for(var i=0; i<arr.length; i++) {
        matrix[i] = [];

        for(var j=0; j<arr[i].length; j++) {
            matrix[i].push(arr[i]);
            
        }
    }

   
    //console.log(matrix);

};   


//(arrSorter(bukvi));










function replacer(arr) {
    var newArr = [];
    var novoArr = [];
    var count = 0; 

    for (var i = 0; i < arr.length; i++) {
        for (var k = 0; k < arr.length; k++) {
            newArr.push(arr[k][i]);
            if (arr[k]>count) count++;

        }
        
    }

    for (var i = 0; i < arr[i].length; i++) {
        console.log(newArr.slice(0, arr[i]));    
    }

    return {newArr :newArr, 
            count : count
            };
};

//console.log(replacer(bukvi));

