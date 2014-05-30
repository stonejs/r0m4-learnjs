//The task is to write a function to generate a string output which is the concatenation of input words from a list/sequence where:
//An input of no words produces the output string of just the two brace characters "{}".
//An input of just one word, e.g. ["ABC"], produces the output string of the word inside the two braces, e.g. "{ABC}".
//An input of two words, e.g. ["ABC", "DEF"], produces the output string of the two words 
//inside the two braces with the words separated by the string " and ", e.g. "{ABC and DEF}".
//An input of three or more words, e.g. ["ABC", "DEF", "G", "H"], produces the output string 
//of all but the last word separated by ", " with the last word separated by " and " and all within braces; e.g. "{ABC, DEF, G and H}".
//Test your function with the following series of inputs showing your output here on this page:
//[] # (No input words).
//["ABC"]
//["ABC", "DEF"]
//["ABC", "DEF", "G", "H"]

function quibble(string) {
    //так как в джаваскрипте нельзя модифицировать строку то решил пойти путем разрезания и склеивания.
    //шаг первый создаем новую, пустую строку
    var newString = "";
    //предвидя проблемы с последней запятой сразу откусываю последний элемент масива
    var lastBit = string.slice(string.length-1, string.length);    

    //циклом перебираю входящую string и обогащаю newString  
    for (var i = 0; i < string.length - 1; i++) {
        newString += (string[i]+', ');

    }; 

    //отрезаю ненужное от newString
    newString = newString.slice(0, newString.length-2);
    //вуаля финальный результат
    var result = '{'+newString+' and '+lastBit.join()+'}';

    //небольшая проверка с целью выводить результат корректно если ввод текста минимальный
    if (string.length > 1){
        return result;

    } else return '{'+string.join()+'}';

    
    
};
//все работает со всякими результатами
console.log(quibble([]));