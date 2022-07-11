let field1El = document.getElementById("field1");
let field2El = document.getElementById("field2");


function generate1() {
    let result1 = 0
    result1 += Math.floor(Math.random() * 50)
    field1El.textContent = "Random number: " + result1
}

function generate2() {
    let result2 = 0
    result2 += Math.floor(Math.random() * 50)
    field2El.textContent = "Random number: " + result2
}