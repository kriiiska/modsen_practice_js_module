/*Создайте блок кода внутри функции и
объявите переменную с именем x с
использованием var, let и const. Попытайтесь
обратиться к этой переменной как внутри, так
и вне блока. Какие переменные видны
снаружи блока, а какие нет?*/

function test() {

  var x_var = "Переменная var";
  let x_let = "Переменная let";
  const x_const = "Переменная const";

  // вывод значений переменных внутри блока
  console.log(x_var); // Выведет: "Переменная var"
  console.log(x_let); // Выведет: "Переменная let"
  console.log(x_const); // Выведет: "Переменная const"
}

test();
  // обращение к переменным вне блока
  // console.log(x_var); // Ошибка: x_var is not defined
  // console.log(x_let); // Ошибка: x_let is not defined
  // console.log(x_const); // Ошибка: x_const is not defined



