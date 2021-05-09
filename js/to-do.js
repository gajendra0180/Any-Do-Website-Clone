var toggleshortcuts_counter = 0
var toggleshortcuts_counter1 = 0

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