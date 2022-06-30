import data from './courses.js';

const zag = `<h2>Posts:</h2>
                   <ul id="cours">
                   </ul>`;

document.getElementById("card").insertAdjacentHTML("afterbegin", zag);

const ul = document.getElementById('cours');

function createElement(data) { // отримуємо масив даних
      return data.map(element => { // перебираємо його
          let tags = element.tags.map(tag => {
              return `<li>${tag}</li>`;
            }).join(''); // створюємо розмітку з тегами
          return `<li>
          <img src="${element.image}" alt="${element.id}">
                    <p>${element.label}</p>
                    <h3>${element.tutor}</h3>
                    <h2>"${element.prices}"</h2>
                    <h3>"${element.linkLabel}"</h3>

                </li>`;
        }).join(''); // повертаємо готову розмітку елементу разом з тегами
}
const list = createElement(data); // викликаємо функцію генерації розмітки
ul.insertAdjacentHTML('afterbegin', list); // додаємо розмітку в DOM

