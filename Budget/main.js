import Budget from './budgetList.js';

let budget = new Budget();

budget.loadList();

document.getElementById('addItem').addEventListener('click', addItemForm);

function addItemForm() {
    const div = document.getElementById('detail');
    div.innerHTML = '';
    div.innerHTML = `
        <label for="store">Store Name:</label>
        <input type="text" name="store" id="storeInput">
        <label for="amount">Amount:</label>
        <input type="number" name="amount" id="amountInput"></input>
        <label for="pDate">Purchase Date:</label>
        <input type="date" id="pDate" name="pDate">
        <p>Description:</p>
        <textarea name="desc" id="desc" cols=54 rows=5 ></textarea>
        <input type="submit" id="submit"></input>
    `
    document.getElementById("submit").addEventListener('click', () => budget.newItem());
}
