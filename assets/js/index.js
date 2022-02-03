/*Создать переменные и записать в них ответ пользователя.
из полученных переменных посчитать площадь фигуры
вывести результат в консоль или alert

Предусмотрите что пользователь мог ввести буквы и сделайте преобразования.*/

// 1. Спросить стороны треугольника и посчитать площадь
/*let side = prompt("Для расчета площади треугольника укажите размер стороны (a)");
let a = Number(side);

let heigh = prompt("Для расчета площади треугольника укажите размер его высоты (ha)");
let ha = Number(heigh);

let calculation = 1 / 2 * a * ha;
console.log (typeof calculation);

alert("Площадь треугольника составлет " + calculation);*/


// 2. Спросить стороны трапеции и посчитать площадь
/*let sideOne = prompt("Для расчета площади трапеции укажите размер стороны (a)");
let a = Number(sideOne);

let sideTwo = prompt("Для расчета площади трапеции укажите размер стороны (b)");
let b = Number(sideTwo);

let heigh = prompt("Для расчета площади треугольника укажите размер его высоты (h)");
let h = Number(heigh);

let calculation = (a + b) / 2 * h;
console.log (typeof calculation);

alert("Площадь трапеции составлет " + calculation);*/


// 3. Спросить радиус круга и посчитать площадь
/*let radius = prompt("Для расчета площади круга укажите размер его радиуса");
let r = Number(radius);

let calculation = Math.PI * Math.pow(r,2);
console.log (typeof calculation);

alert("Площадь круга составлет " + calculation);*/


// 4. Спросить стороны паралеллограма и посчитать площадь
/*let sideOne = prompt("Для расчета площади паралеллограма укажите размер стороны (a)");
let a = Number(sideOne);

let sideTwo = prompt("Для расчета площади паралеллограма укажите размер стороны (b)");
let b = Number(sideTwo);

let corner = prompt("Для расчета площади паралеллограма укажите угол гамма (таблица Брадиса)");
let gamma = Number(corner);

let calculation = a * b * Math.sin(gamma);
console.log (typeof calculation);

alert("Площадь паралеллограма составлет " + calculation);*/

// 5. Спросить стороны цилиндра и посчитать объем
/*let radius = prompt("Для расчета объема цилиндра укажите радиус его основания");
let r = Number(radius);

let heigh = prompt("Для расчета объема цилиндра укажите размер его высоты (h)");
let h = Number(heigh);

let calculation = Math.PI * Math.pow(r, 2) * h;
console.log (typeof calculation);

alert("Объем цилиндра составлет " + calculation);*/

// 6. Спросить стороны сферы и посчитать объем 
let radius = prompt("Для расчета объема сферы укажите ее радиус");
let r = Number(radius);

let calculation = 4 / 3 * Math.PI * Math.pow(r, 3);
console.log (typeof calculation);

alert("Объем сферы составлет " + calculation);