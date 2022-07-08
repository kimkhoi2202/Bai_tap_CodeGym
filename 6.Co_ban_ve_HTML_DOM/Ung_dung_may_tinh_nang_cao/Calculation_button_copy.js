function sum() {
    if (choosecalculaton) {
        choosecalculaton = false
        display = inputcalculation1 + " + "
        document.getElementById("display").innerHTML = display
    } else {
        calculation = parseInt(inputcalculation1) + parseInt(inputcalculation2)
        display = String(calculation)
    }
    document.getElementById("test").innerHTML = "1 - " + inputcalculation1 + "</br>2 - " + inputcalculation2 + "</br>Display - " + display + "</br>Choosecalculation" + choosecalculaton
}

function output() {
    
}