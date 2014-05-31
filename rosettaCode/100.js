

function mansion () {
    var doors = [];
    
    //making doors
    for (var i = 0; i < 100; i++) {
        doors.push(0);

    }


    for(var step = 1; step< 101; step++){
    // increase step size
    // iwth this step, toggle doors
        for(var i = step-1; i< 100; i+=step){
            doors[i] = 1-doors[i]

        }        
    };

    return doors; 

};
var res = mansion();
console.log (res);
console.log(res[63]);

