export default class todos {

    todoList = [];
    id;
    show = 'All';

    constructor() {
        this.id = 0;
    }

    getCurrId() {
        return this.id;
    }
    
    getNextId() {
        return ++this.id;
    }

    loadList() {
      document.getElementById("todoList").querySelector('ul').innerHTML = "";
      this.todoList.forEach(task => {
        switch (this.show) {
            case 'Active':
                if (!task.completed)    
                    document.getElementById("todoList").querySelector('ul').appendChild(task.html(task.name, false, task.id));
                break;
            case 'Completed':
                if (task.completed)
                    document.getElementById("todoList").querySelector('ul').appendChild(task.html(task.name, true, task.id));
                break;
            default:
                document.getElementById("todoList").querySelector('ul').appendChild(task.html(task.name, task.completed, task.id));
                break;
        }
      });
      let list = this.todoList;
      var close = document.getElementsByClassName("close");
      for (let i = 0; i < close.length; i++) {
        close[i].onclick = (e) => {
          var div = e.target.parentElement;
          div.style.display = "none";
          let taskId = div.innerHTML.match('<span class="close" id="(.*?)">')[1];
          console.log(taskId);
          this.todoList = list.filter(item => item.id != taskId);
          console.log(this.todoList);
        }
      }
    }
    
    // Create a new list item when clicking on the "Add" button
    newTask() {
      var inputValue = document.getElementById("myInput").value;
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        let newTask = {
          "id" : this.getNextId(),
          "name" : inputValue,
          "completed" : false,
          "html" : (name, completed, id) => {
                let li = document.createElement("li");
                let t = document.createTextNode(name);
                li.appendChild(t);
                let span = document.createElement("SPAN");
                let txt = document.createTextNode("\u00D7");
                if (completed)
                    li.className = 'checked';
                span.className = "close";
                span.id = id;
                span.appendChild(txt);
                li.appendChild(span);
                return li;
        }};
        console.log(newTask.id);
        this.todoList.push(newTask);
        this.loadList();
      }
      document.getElementById("myInput").value = "";
    
    }
    
  
}
  