/**Напишите функцию, выполняющую серию
асинхронных операций последовательно,
используя Promises */


const fetchOperation = () => new Promise((resolve) => {
  setTimeout(() => resolve("Операция выполнена"), 1000);
});

const processOperation  = () => new Promise((resolve) => {
  setTimeout(() => resolve("Операция выполнена 1 секунду назад"), 1000);
});

const processOperation2  = () => new Promise((resolve) => {
  setTimeout(() => resolve("Операция выполнена 2 секунды назад"), 1000);
});

const processOperation3  = () => new Promise((resolve) => {
  setTimeout(() => resolve("Операция выполнена 3 секунды назад"), 1000);
});

const processOperation4  = () => new Promise((resolve) => {
  setTimeout(() => resolve("Операция выполнена 4 секунды назад"), 1000);
});
const processOperation5  = () => new Promise((resolve) => {
  setTimeout(() => resolve("Операция выполнена 5 секунд назад"), 1000);
});

fetchOperation()
  .then(result1 => {
      console.log(result1); 
      return processOperation(result1);
  })
  .then(result2 => {
      console.log(result2); 
      return processOperation2(result2 );
  })
  .then(result3 => {
      console.log(result3); 
      return processOperation3(result3);
  })
  .then(result4 => {
      console.log(result4); 
      return processOperation4(result4);
  })
  .then(result5 => {
      console.log(result5); 
      return processOperation5(result5);
  })
  .then(result6 => {
      console.log(result6); 
  })
  .catch(error => {
    console.error("Произошла ошибка:", error);
  });

  