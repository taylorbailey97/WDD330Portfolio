export default class Budget {

    id;
    list = [];
    show = 'All';

    constructor() {
        this.id = Date.now();
        this.list = JSON.parse(window.localStorage.getItem('budget')) || [];
    }

    loadList() {
      document.getElementById("itemList").innerHTML = "";
      const sortList = this.list.slice().sort((a, b) => {
        return Date.parse(b.date) - Date.parse(a.date);
      });
      sortList.forEach(item => {
        document.getElementById("itemList").appendChild(this.loadItem(item));
      });
      this.loadValues();
      let det = document.getElementsByClassName("item");
      for (let i = 0; i < det.length; i++) {
        det[i].onclick = (e) => {
          let el;
          if (e.target.tagName != "LI")
            el = e.target.parentElement;
          else
            el = e.target;
          const item = this.list.find(item => item.id == el.id);
          this.loadDetails(item);
        }
      }
    }

    loadItem(item) {
      let li = document.createElement("li");
      let h5 = document.createElement("h5");
      let p = document.createElement('p');
      let className = item.negative ? 'green' : 'red';
      li.id = item.id;
      li.classList.add(className);
      li.classList.add('item');
      h5.appendChild(document.createTextNode(item.storeName));
      p.appendChild(document.createTextNode('$' + parseFloat(item.value).toFixed(2)));
      li.appendChild(h5);
      li.appendChild(p);
      return li;
    }

    loadValues() {
      let spent = 0;
      let budget = 0;
      this.list.forEach(item => {
        if (parseFloat(item.value) < 0)
          spent += parseFloat(item.value);
        else 
          budget += parseFloat(item.value);
      });
      document.getElementById('current').innerHTML = '$' + (budget + spent).toFixed(2);
      document.getElementById('spent').innerHTML = '$' + spent.toFixed(2);
    }

    loadDetails(item) {
      const div = document.getElementById('detail');
      let className = item.negative ? 'green' : 'red';
      div.innerHTML = '';
      div.innerHTML = `
        <div class="item-detail ${className}">
        <p class="item-date">Date: ${item.date}</p>
        <h4>Store Name:</h4>
        <p class="item-name">${item.storeName}</p>
        <h4>Amount:</h4>
        <p>$${parseFloat(item.value).toFixed(2)}</p>
        <h4>Details:</h4> 
        <p class="item-desc">${item.desc}</p>
        <div id="delete" >Delete</div>
        <div class="buttons">
          <div id="edit" > Edit</div>
          <div id="cancel">Cancel</div>
        </div>
        </div>
      `;
      document.getElementById('delete').addEventListener('click', () => {
        this.removeItem(item.id);
      });
      // document.getElementById('delete').addEventListener('touchend', () => {
      //   this.removeItem(item.id);
      // });
      document.getElementById('cancel').addEventListener('click', () => {
        document.getElementById('detail').innerHTML = '';
      });
      // document.getElementById('cancel').addEventListener('touchend', () => {
      //   document.getElementById('detail').innerHTML = '';
      // });
      document.getElementById('edit').addEventListener('click', () => {
        this.editItem(item);
      });
    }

    editItem(item) {
      const div = document.getElementById('detail');
      div.innerHTML = '';
      div.innerHTML = `
          <label for="store">Store Name:</label>
          <input type="text" name="store" id="storeInput" value="${item.storeName}">
          <label for="amount">Amount:</label>
          <input type="number" name="amount" id="amountInput" value="${item.value}"></input>
          <label for="pDate">Purchase Date:</label><br>
          <input type="date" id="pDate" name="pDate" value="${item.date}">

          <p>Description:</p>
          <textarea name="desc" id="desc">${item.desc}</textarea>
          <br>
          <input type="submit" id="submit" value="Submit"></input>
          <br>
          <a id="cancel">Cancel</a>
      `
      // document.getElementById("submit").addEventListener('touchend', () => budget.newItem());
      document.getElementById("submit").addEventListener('click', () => {
        item.store = document.getElementById('storeInput').value;
        item.value = document.getElementById('amountInput').value;
        item.date = document.getElementById('pDate').value;
        item.desc = document.getElementById('desc').value;
        this.list = this.list.filter(el => el.id != item.id);
        this.newItem(item);
        document.getElementById('detail').innerHTML = '';
      });
      // document.getElementById("cancel").addEventListener('touchend', () => document.getElementById('detail').innerHTML = '');
      document.getElementById("cancel").addEventListener('click', () => document.getElementById('detail').innerHTML = '');
    }

    removeItem(id) {
      document.getElementById('detail').innerHTML = '';
      const result = this.list.filter(item => item.id != id);
      this.list = result;
      this.loadList();
      window.localStorage.setItem('budget', JSON.stringify(this.list));
    }
    
    // Create a new list item when clicking on the "Add" button
    newItem() {
      const storeName = document.getElementById("storeInput").value;
      const amount = document.getElementById("amountInput").value;
      const desc = document.getElementById('desc').value;
      const date = document.getElementById('pDate').value;
      console.log(amount);
      let id = Date.now();
      let newItem = {
        "id" : id,
        "storeName" : storeName,
        "value" : amount,
        "date" : date,
        "negative" : amount > 0 ? true : false,
        "desc" : desc
      };
      this.list.push(newItem);
      window.localStorage.setItem('budget', JSON.stringify(this.list));
      this.loadList();
      document.getElementById("detail").innerHTML = '';
    
    }
    
  
}
  