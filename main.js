import Budget from './budgetList.js';

let budget = new Budget();

budget.loadList();

document.getElementById('addItem').addEventListener('touchend', addItemForm);

function addItemForm() {
    const div = document.getElementById('detail');
    div.innerHTML = '';
    div.innerHTML = `
        <label for="store">Store Name:</label>
        <input type="text" name="store" id="storeInput">
        <label for="amount">Amount:</label>
        <input type="number" name="amount" id="amountInput"></input>
        <label for="pDate">Purchase Date:</label><br>
        <input type="date" id="pDate" name="pDate">
        <p>Description:</p>
        <textarea name="desc" id="desc"></textarea>
        <br>
        <input type="submit" id="submit" value="Submit"></input>
        <br>
        <a id="cancel">Cancel</a>
    `
    document.getElementById("submit").addEventListener('touchend', () => budget.newItem());
    document.getElementById("cancel").addEventListener('touchend', () => document.getElementById('detail').innerHTML = '');
}
