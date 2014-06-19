/*

["a","bb","dd"]
["a","bb","e"]
["a","cc","dd"]
["a","cc","e"]
["b","bb","dd"]
["b","bb","e"]
["b","cc","dd"]
["b","cc","e"]
["c","bb","dd"]
["c","bb","e"]
["c","cc","dd"]
["c","cc","e"]

Еще раз, "программа выводит ВСЕ возможные РАЗЛИЧНЫЕ массивы длины N,
где на i-м месте -- любая строка из i-го массива во входящем массиве".
Где у тебя перебор всех вариантов?

Еще раз, для ввода [["a","b","c"], ["bb","cc"], ["dd","e"]]. Имеем
массив из трех массивов. Значит, нужно выводить массив из трех
строчек. На первом месте может быть любая из строчек первого массива
(т.е. одна из "a","b","c"), на втором -- любая из второго массива
(т.е. одна из "bb","cc"), на третьем -- любая из "dd","e". Например,
берем "a" из первого, "cc" из второго, "d" из третьего, т.е. ["a",
"cc", "d"]. Перебор всех вариантов дает вывод, приведенный сверху.

Порядок вывода вариантов не важен. В выводе не должно быть двух
одинаковых массивов, т.е. ["a", "cc", "d"] два раза повторяться не
может. При этом во входе гарантируется, что в каждом из массивов со
строчками все строчки разные, т.е. во входном массиве не может быть
такого массива как ["a", "a", "b"].

Пожалуйста, внимательно прочитай условие еще раз, и подумай, что нужно
сделать. Задай вопрос, если что-то непонятно. Я, правда, не могу
представить такого прочтения условия, которое подразумевало бы такое
решение как ты предложил. */

var bukvi = [["a","b"], ["c","d"]];



function exchange (arr) {
    
    var fullArr = [];
    
    

    if (arr.length%2===1) {
        var element0 = arr[0];
        var element1 =  arr.slice(1, (arr.length+1)/2);
        element1 = (element1.join().split(','));
        var element2 = arr.slice((arr.length+1)/2);
        element2 = (element2.join().split(','));
        
        
        for (var i = 0; i < element1.length; i++) {
            for (var k = 0; k < element2.length; k++) {
                for (var j =0; j < element0.length; j++) {
                    fullArr.push([element0[j],element1[i],element2[k]]);
                }
            
            }

        };



    return fullArr;

    } else if (arr.length%2===0) {
        var element0 = arr[0];
        var element1 =  arr.slice(1, (arr.length)/2);
        element1 = (element1.join().split(','));
        var element2 = arr.slice((arr.length)/2);
        element2 = (element2.join().split(','));
        
        
        for (var i = 0; i < element1.length; i++) {
            for (var k = 0; k < element2.length; k++) {
                for (var j =0; j < element0.length; j++) {
                    fullArr.push([element0[j],element1[i],element2[k]]);
                }
            
            }

        };

        return fullArr;
    }

    

};

console.log(exchange(bukvi)) ;


