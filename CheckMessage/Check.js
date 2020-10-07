function check()
{
    let message = document.getElementById("message").value;
    let messageOut = (message == "employee") ? "hello"
        : (message == "director") ? "greeting"
            : (message == "") ? "no login"
                : "";
    document.getElementById("out").innerHTML = messageOut;
}