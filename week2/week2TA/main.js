document.getElementById("button1").addEventListener("click", button);
 
function button() {
    let a = document.getElementById('usertext').value;
    document.getElementById("div1").innerHTML = a;
}
 
 
document.getElementById("button2").addEventListener("click", function(){ 
    let answer = sum(document.getElementById("number").value); 

    document.getElementById("div2").innerHTML = answer;
});

document.getElementById("button3").addEventListener("click", function(){ 
    let answer = add(parseInt(document.getElementById("add1").value), parseInt(document.getElementById("add2").value)); 

    document.getElementById("div3").innerHTML = answer;
});

document.getElementById("button4").addEventListener("click", () => { 
    let answer = multiply(parseInt(document.getElementById("multi1").value), parseInt(document.getElementById("multi2").value)); 

    document.getElementById("div4").innerHTML = answer;
});

document.getElementById("button5").addEventListener("click", divide);
 
function sum(num) {
   // let num = parseInt(document.getElementById("number").value);
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
   return total;
}

function add(num1, num2) {
    let total = num1 + num2;
    return total;
}

function multiply(num1, num2) {
    let total = num1 * num2;
    return total;
}

function divide() {
    let num1 =  parseInt(document.getElementById("divide1").value);
    let num2 =  parseInt(document.getElementById("divide2").value);
    let total = num1 / num2;
    document.getElementById("div5").innerHTML = total;
}
