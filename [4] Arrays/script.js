/**Напишите функцию, которая принимает
массив с числами и увеличивает каждое
число из массива на 10 процентов*/

function func1(arr) {

  if(!Array.isArray(arr)){
    return null;
  }

  let tempArr = [];

  for (let i=0; i<arr.length; i++) {
    tempArr.push(arr[i] + (arr[i]*0.1));
  }
  return tempArr;
}

  const r = [1,2,3,4,5,6,7,8,9];
  const result = func1(r);
  console.log(result);