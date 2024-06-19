/*Напишите функцию, которая многократно
выполняет заданную операцию через
фиксированный интервал, используя
setInterval()*/


function func1(start) {

  let interval = setInterval(() => {
    console.log('start:', start);
    start++;
    if(start === 7) {
      clearInterval(interval);
    }
  }, 1000);
}

func1(1);