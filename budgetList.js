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
      this.list.forEach(item => {
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
      this.list.forEach(item => {
        if (parseFloat(item.value) < 0)
          spent += parseFloat(item.value);
      });
      document.getElementById('current').innerHTML = '$' + (4000 + spent).toFixed(2);
      document.getElementById('spent').innerHTML = '$' + spent.toFixed(2);
    }

    loadDetails(item) {
      const div = document.getElementById('detail');
      let className = item.negative ? 'green' : 'red';
      div.innerHTML = '';
      div.innerHTML = `
        <div class="item-detail">
        <h4 class="item-date">${item.date}</h4>
        <h4>Store Name:</h4>
        <p class="item-name">${item.storeName}</p>
        <h5>Amount:</h5>
        <p class="${className}">$${item.value}</p>
        <h5>Details:</h5> 
        <p class="item-desc">${item.desc}</p>
        <button>Delete</button>
        </div>
      `;
      document.querySelector('button').addEventListener('click', () => {
        this.removeItem(item.id);
      });
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
  