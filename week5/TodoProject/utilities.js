import todos from './todos.js';

// window.todo = new todos();
const todo = new todos();
document.getElementById("addBtn").addEventListener('click', () => todo.newTask() );


// Add a "checked" symbol when clicking on a list item
const list = document.getElementById('todoList').querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    let taskName = ev.target.innerHTML.match('(.*?)<span')[1];
    let task = todo.todoList.find((element => {
      return element.name === taskName;
    }));
    task.completed = task.completed ? false : true;
  }
  todo.loadList();
}, false);



const filterButtons = document.getElementById('filter').querySelector('ul');
filterButtons.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    const els = document.querySelectorAll('.selected');
    for (let i = 0; i < els.length; i++) {
      els[i].classList.remove('selected')
    }
    ev.target.classList.toggle('selected');
    todo.show = ev.target.innerHTML;
    todo.loadList();
  }
});

