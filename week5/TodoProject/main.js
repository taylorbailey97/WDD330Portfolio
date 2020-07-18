const taskList = [
    {
      name: 'Load Dishes'
    }
];

window.addEventListener('load', renderTodoList)

function renderTodoList() {
    taskList.forEach(task => {
        document.getElementById('todoList').appendChild(renderTodoItem(task));
    });
}

// function deleteTask(name) {
//     console.log(name);
//     const newList = this.taskList.filter(task => task.name != name);
//     // this.taskList = newList;
//     renderTodoList();
// }

function renderTodoItem(task) {
  const item = document.createElement("li");

  item.innerHTML = `
            <label class="container">
            </label>
            <h2>${ task.name }</h2>
            <button onClick="deleteTask(\' ${ task.name } \')"><i class="fas fa-trash"></i></button>`;

  return item;
}

const checkBox = document.querySelector('.todo');

checkBox.addEventListener('click', check)

function check(e) {
    let element = e.target;
    element.classList.toggle("checked");
}