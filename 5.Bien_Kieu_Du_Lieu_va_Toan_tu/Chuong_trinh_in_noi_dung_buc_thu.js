function letter() {
    let name = document.getElementById("name").value;
    let content = name + "Thân mến"
    document.getElementById("result").innerHTML = content
    let date = document.getElementById("date").value
    console.log(date)
}