/**Создайте класс под названием «Человек» со
свойствами имени, возраста и страны.
Включите метод для отображения сведений о
человеке. Создайте два экземпляра класса
«Человек» и отобразите их сведения */

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayInfo () {
    console.log(`Name: ${this.name}`)
    console.log(`Age: ${this.age}`)
    console.log(`Country: ${this.country}`)
  }
}

  const person1 = new Person('Kristina', 20, 'Belarus');
  const person2 = new Person('Marina', 30, 'Russia');
  person1.displayInfo();
  console.log('---------------');
  person2.displayInfo();
