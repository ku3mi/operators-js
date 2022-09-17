// operators - операторы js
let x;
x = 5 + 5;
console.log(`Результат сложения: ${x}`);
x = 200 - 10;
console.log(`резудьтат вычетания: ${x}`);
x = 10 / 2;
console.log(`Редьтат деления: ${x}`);
// 
let resultOne = "Alina" + " " + "loves" + " " + "herself";
console.log(resultOne);
console.log(typeof resultOne);

let resultTwo = "Alina" + " " + "is" + " " + "18" + " " + "years" + " " + "old";
console.log(resultTwo);
console.log(typeof resultTwo);
// 
let z = "10",
   y = "5";
console.log(z + y);
console.log(+z + +y);

//

let w = 5 + 1
let q = 5;
let result = 9 - (w = q + 1);
console.log("Результат в скобках: " + w);
console.log("Общий результат: " + result);
// 
let result1 = result2 = result3 = 1 + 5;
console.log(result1);
console.log(result2);
console.log(result3);

// Инкремент --- увеличивает число на единицу
let uncrement = 2;
console.log("Без инкремента: " + uncrement);
uncrement++;
console.log("С инкрементом: " + uncrement);

// Декремент --- уменьшает число на единицу
let decrement = 5;
console.log("Без декремента: " + decrement);
decrement--;
console.log("С декрементом: " + decrement);

// Постфиксная форма
let uncrementFix = 0;
console.log(uncrementFix++);
console.log(uncrementFix);

//  Оператор || (ИЛИ)
let userName = "Alina",
   userNickName = "";

let user = userNickName || userName || "Без назназвания";
console.log(user);

// 
let f = 0,
   g = 5;
f > g || g++;
console.log(g);

// Оператор && (И)- false
console.log('alina' && 1 && 00);
console.log(1 && null && 2 && 0);
console.log('54' && '43');

// Приоритет && больше чем || 
console.log(100 && 0 || 3 && 9);

// 
let userOne = 4;
(userOne > 0) && console.log(`Пользователей на сайте: ${userOne} человека ;)`);

// Оператор НЕ !
console.log(!true);
console.log(!null);

