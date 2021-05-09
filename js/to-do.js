var toggleshortcuts_counter = 0
var toggleshortcuts_counter1 = 0
todaybadgecounter = 0
var text = ""

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
    document.getElementById("today").innerHTML = s + "<li>" + text + "</li>"
    document.getElementById("inputtext").value = "";
    todaybadgecounter++
    document.getElementById("todaybadgecounter").innerHTML = todaybadgecounter
}