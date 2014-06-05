//There are four types of common coins in US currency: quarters (25 cents), 
//dimes (10), nickels (5) and pennies (1). There are 6 ways to make change for 15 cents:
//A dime and a nickel;
//A dime and 5 pennies;
//3 nickels;
//2 nickels and 5 pennies;
//A nickel and 10 pennies;
//15 pennies.
//How many ways are there to make change for a dollar using these common coins? (1 dollar = 100 cents).



function countTheCoins(target, coins) {
    var result = [1];


    //create 2 loops 
    //1st will iterate differ coins 
    for (var step = 0; step < coins.length; step++) {
        //2nd will check from every coin on target count and will add to 
        //result point if condition is true 
        for (var test = 1; test < target+1; test++) {

            //initialize undefined target
            result[test] = result[test] ? result[test] : 0;

            //accumulate target + operand ways
            result[test] += (test < coins[step]) ? 0 : result[(test - coins[step])];

        };
        
    };

    return (result[result.length -1]);
};

console.log(countTheCoins(100,[1,5,10,25]));






