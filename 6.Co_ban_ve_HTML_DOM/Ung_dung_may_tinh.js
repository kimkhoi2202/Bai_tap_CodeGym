function Add() {    
    // Lấy 2 số
    var number1 = +document.getElementById("num1").value;
    var number2 = +document.getElementById("num2").value;

    // Tính toán
    let sum = number1 + number2;
    
    // Kết quả
    let result_sum = ("Kết quả là: " + number1 + "+" + number2 + "=" + sum)
    document.getElementById("result_sum").innerHTML = result_sum
}

function Sub() {
    // Lấy 2 số
    var number1 = +document.getElementById("num1").value;
    var number2 = +document.getElementById("num2").value;

    // Tính toán
    let sub = number1 - number2;
    // Kết quả
    let result_sub = ("Kết quả là: " + number1 + "-" + number2 + "=" + sub)
    document.getElementById("result_sum").innerHTML = result_sub
}

function Mul() {
    // Lấy 2 số
    var number1 = +document.getElementById("num1").value;
    var number2 = +document.getElementById("num2").value;

    // Tính toán
    let mul = number1 * number2;
    
    // Kết quả
    let result_mul = ("Kết quả là: " + number1 + "*" + number2 + "=" + mul)
    document.getElementById("result_sum").innerHTML = result_mul
}

function Div() {
    // Lấy 2 số
    var number1 = +document.getElementById("num1").value;
    var number2 = +document.getElementById("num2").value;

    // Tính toán
    let div = number1 / number2;

    // Kết quả
    let result_div = ("Kết quả là: " + number1 + "/" + number2 + "=" + div)
    document.getElementById("result_sum").innerHTML = result_div
}