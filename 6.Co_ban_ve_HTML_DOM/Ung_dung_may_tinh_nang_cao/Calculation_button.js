function sum() {
    if (choosecalculaton) {
        choosecalculaton = false
        display = inputcalculation1 + " + "
        document.getElementById("display").innerHTML = display
    } else {
        display = String(parseInt(inputcalculation1) + parseInt(inputcalculation2))
        document.getElementById("display").innerHTML = display
        inputcalculation1 = display
        inputcalculation2 = ""
    }
    document.getElementById("test").innerHTML = "1 - " + inputcalculation1 + "</br>2 - " + inputcalculation2 + "</br>Display - " + display + "</br>Choosecalculation" + choosecalculaton
}

function sub() {
    if (choosecalculaton) {
        choosecalculaton = false
        display = inputcalculation1 + " - "
        document.getElementById("display").innerHTML = display
    } else {
        display = String(parseInt(inputcalculation1) - parseInt(inputcalculation2))
        document.getElementById("display").innerHTML = display
        inputcalculation1 = display
        inputcalculation2 = ""
    }
    document.getElementById("test").innerHTML = "1 - " + inputcalculation1 + "</br>2 - " + inputcalculation2 + "</br>Display - " + display + "</br>Choosecalculation" + choosecalculaton
}

function mul() {
    if (choosecalculaton) {
        choosecalculaton = false
        display = inputcalculation1 + " * "
        document.getElementById("display").innerHTML = display
    } else {
        display = String(parseInt(inputcalculation1) * parseInt(inputcalculation2))
        document.getElementById("display").innerHTML = display
        inputcalculation1 = display
        inputcalculation2 = ""
    }
    document.getElementById("test").innerHTML = "1 - " + inputcalculation1 + "</br>2 - " + inputcalculation2 + "</br>Display - " + display + "</br>Choosecalculation" + choosecalculaton
}

function div() {
    if (choosecalculaton) {
        choosecalculaton = false
        display = inputcalculation1 + " / "
        document.getElementById("display").innerHTML = display
    } else {
        display = String(parseInt(inputcalculation1)/parseInt(inputcalculation2))
        document.getElementById("display").innerHTML = display
        inputcalculation1 = display
        inputcalculation2 = ""
    }
    document.getElementById("test").innerHTML = "1 - " + inputcalculation1 + "</br>2 - " + inputcalculation2 + "</br>Display - " + display + "</br>Choosecalculation" + choosecalculaton
}

function output() { 
    if (choosecalculaton) {
        choosecalculaton = false
        document.getElementById("display").innerHTML = display
    } else {
        if (String(display).indexOf("+")) {
            display = String(parseInt(inputcalculation1) + parseInt(inputcalculation2))
        } else if (String(display).indexOf("-")) {
            display = String(parseInt(inputcalculation1) - parseInt(inputcalculation2))
            alert("test")
        } else if (String(display).indexOf("*")) {
            display = String(parseInt(inputcalculation1) * parseInt(inputcalculation2))
        } else if (String(display).indexOf("/")) {
            display = String(parseInt(inputcalculation1) / parseInt(inputcalculation2))
        }
        document.getElementById("display").innerHTML = display
        inputcalculation1 = display
        inputcalculation2 = ""
        choosecalculaton = true
    }
    document.getElementById("test").innerHTML = "1 - " + inputcalculation1 + "</br>2 - " + inputcalculation2 + "</br>Display - " + display + "</br>Choosecalculation - " + choosecalculaton
}