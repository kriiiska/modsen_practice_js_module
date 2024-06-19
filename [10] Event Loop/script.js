/**Напишите функцию, которая принимает
callback функцию и вызывает ее после
задержки в 2 секунды*/
 
function callAfterDelay(callback) {
  setTimeout(callback, 2000);
}

function myCallback() {
  console.log('Callback вызван!');
}

callAfterDelay(myCallback);
