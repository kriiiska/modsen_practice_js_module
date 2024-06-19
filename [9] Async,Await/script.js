/**Напишите функцию, которая использует
async/await для загрузки данных с удаленного
сервера (например, с помощью API) и
возвращает полученный результат */

async function fetchDataFromServer(url) {
  try {
    const response = await fetch(url); // Отправляем запрос и ждем ответа
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); // Ждем преобразования ответа в JSON
    return data; // Возвращаем полученные данные
  } catch (error) {
    console.error('Произошла ошибка:', error);
    throw error; // Перебрасываем ошибку для обработки дальше, если нужно
  }
}

async function exampleUsage() {
  const url = 'https://jsonplaceholder.typicode.com/posts/1'; // Пример URL для тестирования
  try {
    const data = await fetchDataFromServer(url); // Ждем получения данных с сервера
    console.log('Полученные данные:', data); // Выводим полученные данные в консоль
  } catch (error) {
    console.error('Произошла ошибка при загрузке данных:', error); // Обработка ошибки, если что-то пошло не так
  }
}

exampleUsage();


