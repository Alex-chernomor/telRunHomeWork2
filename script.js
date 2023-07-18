// 1)Найдите общие элементы(в виде массива) между двумя массивами.
// Пример: [1,2,3], [4,2,1] => [1,2]

const arr1 = [1,2,3];
const arr2 = [4,2,1];
const resultArr = [];

for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length;j++){
        if(arr1[i]===arr2[j]){
            resultArr.push(arr1[i]);
        }
    }
}
// ---------------------------------------------------------------------------
// 2)Создать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа.

const createArray = function(num){
  const arrayResult = [];
  let firstNum = 0
    for(let i=0; i<=num;i++){
        arrayResult.push(firstNum++)
    }
    return arrayResult
}



// -----------------------------------------------------------------------

// 3)Предыдущее задание делаем с объектом. (как ключ передаем i).

const createArrayObject = function(num){
  const arrayResult = [];
  let firstNumObj = 0
    for(let i=0; i<=num;i++){
        arrayResult.push({i:firstNumObj++})
    }
    return arrayResult
}


// -----------------------------------------------------------------------
// 4)Описать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в массив. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем [“dog”,”dog”,”dog”].

const createArrayString = function(number,string){
    const arrayResult = [];
    for(let i = 0; i<number; i++){
        arrayResult.push(string)
    }

    return(arrayResult);
}


// ---------------------------------------------------------
// 5)Создайте функцию, которая как аргумент принимает одну строку.Функция возвращает это слово в развернутов виде. Пример: “cat” => “tac”

const changeString = function(string){
    return string.split("").reverse().join("");
     ;
}

// ----------------------------------------------------------
// 6)Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.

const checkWord = function(string){
     
    const word = string.toLowerCase().split("").reverse().join("");
    const word2 = string.toLowerCase();

     if (word === word2){
        return true
     } else {
        return false
     }
}
// ----------------------------------------------------------------

const findObject = function(obj){
  let result = 1;
  for(let i = 0; i < obj.length; i++){
    if(result < obj[i].price){
        result = obj[i].price
    }
  }
  return result
}

const productObj = [
    {name:"table", price:100},
    {name:"book", price:50},
    {name:"pen", price:10},
    {name:"phone", price:300},
    {name:"glass", price:20},
    {name:"picture", price:200},
]

// console.log(productObj[1]);
;