// function renderTodoItem(task) {
//   const item = document.createElement("li");

//   item.innerHTML = ` <h2>${hike.name}</h2>
//         <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
//         <div>
//                 <div>
//                     <h3>Distance</h3>
//                     <p>${hike.distance}</p>
//                 </div>
//                 <div>
//                     <h3>Difficulty</h3>
//                     <p>${hike.difficulty}</p>
//                 </div>
//         </div>`;

//   return item;
// }

const checkBox = document.querySelector('.todo');

checkBox.addEventListener('click', check)

function check(e) {
    let element = e.target;
    console.log(element);
    if (element.children[0].tagName == 'SPAN') {
        element.classList.toggle("checked");
        element.children[0].innerHTML == 'X' 
        ? element.children[0].innerHTML = '' 
        : element.children[0].innerHTML = 'X';
    }
}