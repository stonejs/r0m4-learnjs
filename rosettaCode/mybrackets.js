//Generate a string with N opening brackets (“[”) and N closing 
//brackets (“]”), in some arbitrary order.
//Determine whether the generated string is balanced; 
///that is, whether it consists entirely of pairs of 
//opening/closing brackets (in that order), none of which 
//mis-nest.
 //examples
 //(empty)   OK
 //  []        OK   ][        NOT OK
 //  [][]      OK   ][][      NOT OK
 //  [[][]]    OK   []][[]    NOT OK


//шаг первый - Создаем генератор случайных скобок 

function random(x) {
    return Math.floor(Math.random() * (x+1));
};

function randBrackets(len) {
    var content = { 0 : '[', 1 : ']'};
    var n = [];
    
    for (var i = 0; i < len; i++) {
        n.push(content[random(1)])
    }
    return n.join('');

};

var brackets = randBrackets(10);
console.log(brackets);

//шаг второй создаем функцию - ревизор/оповеститель 
    
    function determ(str) {
        //для того, чтобы определить, скобки будут работать или 
        //нет, предлагаю разделить входящую строку на 2 ровно по 
        //середине и сравнить эти две части. Изходя из условия 
        //задачи можно понять, что рабочий вариант строки будет 
        //иметь обязательно ровное колличество открывающих 
        //скобок и закрывающих. 
        var cl = 0;
        var op = 0;

        for (var i = 0; i < str.length; i++) {
            //Так же если попадется закрывающая скобка в строке без 
            //предварительно выпавшей открывающейся - то такой вариант 
            //тоже будет не рабочим. Первый иф элс проверяет не попалась ли
            if (str[i]==='['){
                op +=1;
        
            }else if (str[i]===']'){
                cl +=1;
        
            };
        
            if (cl>op){
                return "false"};
        
        };
               

        if (cl != op){
            return 'No way! - those brackets will fall in the first pressure'
        
        } else return "Good"

    };

    console.log(determ(brackets));