/*Напишите функцию для сравнения двух
объектов, чтобы определить, содержит ли
первый из них эквивалентные значения
свойств по сравнению со вторым*/ 

function equal(){

  const obj1 = new Object({ title: 'Война и мир', author: 'Лев Толстой' })
  const obj2 = new Object({ title: 'Война и мир', author: 'Лев Толстой' })

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    console.log('Объекты имеют разное количество свойств')
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      console.log(`Свойство '${key}' имеет разные значения.`)
    }
  }

  console.log("Первый и второй объекты эквивалентны."); 
}

equal();