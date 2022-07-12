let field1El = document.getElementById("field1");
let field2El = document.getElementById("field2");
let field3El = document.getElementById("field3");


function generate1() {
    let result1 = 0
    result1 += Math.floor(Math.random() * 50)
    field1El.textContent = "Random number -> " + result1
}

function generate2() {
    let result2 = 0
    result2 += Math.floor(Math.random() * 51) + 50
    field2El.textContent = "Random number -> " + result2
}

function generate3() {
    let result3 = 0
    result3 += Math.floor(Math.random() * 101) + 100
    field3El.textContent = "Random number -> " + result3
}