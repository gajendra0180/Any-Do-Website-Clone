var toggleshortcuts_counter = 0
var toggleshortcuts_counter1 = 0
todaybadgecounter = 0
var text = ""

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

function toggleclick() {
    if (toggleshortcuts_counter)
        document.getElementById("toggleshortcuts").style.display = "none";
    else
        document.getElementById("toggleshortcuts").style.display = "block";
    toggleshortcuts_counter = !toggleshortcuts_counter;
}

function toggleclick1() {
    if (toggleshortcuts_counter1)
        document.getElementById("toggleshortcuts1").style.display = "none";
    else
        document.getElementById("toggleshortcuts1").style.display = "block";
    toggleshortcuts_counter1 = !toggleshortcuts_counter1;
}


function addtolist() {
    text = document.getElementById("inputtext").value;
    console.log(document.getElementById("today").innerHTML)
    var s = document.getElementById("today").innerHTML
    console.log(text)
    let counter = 0;
    for (let i = 0; i < text.length; i++) {
        const element = text[i];
        if (element == " ")
            counter++;
    }
    if (counter == text.length)
        createtask();
    else

    {
        document.getElementById("today").innerHTML = s + "<li>" + text + "</li>"
        document.getElementById("inputtext").value = "";
        todaybadgecounter++
        document.getElementById("todaybadgecounter").innerHTML = todaybadgecounter
        document.getElementById("todaybadgecounters").innerHTML = todaybadgecounter
    }
}

function createtask() {
    document.getElementById("inputtext").focus();
}