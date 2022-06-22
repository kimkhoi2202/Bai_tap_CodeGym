function check_even_number() {
    let number = document.getElementById("number").value;
    if (number % 2 == 0) {
        result = "Số " + number + " là số chẵn.";
    } else {
        result = "Số " + number + " không phải là số chẵn.";
    }
    document.getElementById("result").innerHTML = result
}