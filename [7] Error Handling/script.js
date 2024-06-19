/**Напишите функцию, которая принимает
число в качестве параметра и выдает
пользовательскую ошибку, если число не
является целым числом */

function isInteger(num) {
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    throw new Error("Должно быть целое число");
  }
  return num;
}

function getUserInput() {
  let userInput;
  let isValidInput = false;

  while (!isValidInput) {
    userInput = prompt("Введите целое число.", 1);
    userInput = Number(userInput);

    try {
      userInput = isInteger(userInput);
      isValidInput = true;
    } catch (error) {
      console.log('Ошибка:', error.message);
    }
  }
  return userInput;
}

let validInput = getUserInput();
console.log(`Вы ввели корректное целое число: ${validInput}`);



