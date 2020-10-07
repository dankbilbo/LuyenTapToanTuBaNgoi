function sumcheck()
{
    let a = parseInt(document.getElementById("number1").value);
    let b = parseInt(document.getElementById("number2").value);
    let result = (a + b > 4) ? "over" : "below";
    document.getElementById("result").innerHTML = result;
}