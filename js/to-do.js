var toggleshortcuts_counter = 0
var toggleshortcuts_counter1 = 0
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


function daytoadd_today() {
    toggletoday = !toggletoday
    if (toggletoday)
        document.getElementById("today").style.display = "none";
    else
        document.getElementById("today").style.display = "block";
    daytoadd = 0
    document.getElementById("today").style.color = "red";
    document.getElementById("Tomorrow").style.color = " black";
    document.getElementById("upcoming").style.color = " black";
    document.getElementById("Someday").style.color = " black";
}

function daytoadd_tomorrow() {
    toggletomorrow = !toggletomorrow
    daytoadd = 1
    document.getElementById("Tomorrow").style.color = " red";
    document.getElementById("today").style.color = " black";
    document.getElementById("upcoming").style.color = " black";
    document.getElementById("Someday").style.color = " black";


}

function daytoadd_upcoming() {
    toggleupcoming = !toggleupcoming
    daytoadd = 2
    document.getElementById("upcoming").style.color = " red";
    document.getElementById("today").style.color = " black";
    document.getElementById("Tomorrow").style.color = " black";
    document.getElementById("Someday").style.color = " black";

}

function daytoadd_someday() {
    togglesomeday = !togglesomeday
    daytoadd = 3
    document.getElementById("Someday").style.color = " red";
    document.getElementById("today").style.color = " black";
    document.getElementById("Tomorrow").style.color = " black";
    document.getElementById("upcoming").style.color = " black";

}

var daytoadd = 0
var obj = { 0: "today", 1: "Tomorrow", 2: "upcoming", 3: "Someday" } //This is for adding list item to corresponding day
var badge = { 0: "todaybadgecounter", 1: "Tomorrowbadgecounter", 2: "upcomingbadgecounter", 3: "Somedaybadgecounter" } //This is for updating badge data 
var todaybadgecounter = 0,
    Tomorrowbadgecounter = 0,
    upcomingbadgecounter = 0,
    Somedaybadgecounter = 0;
var badgecounter = { 0: todaybadgecounter, 1: Tomorrowbadgecounter, 2: upcomingbadgecounter, 3: Somedaybadgecounter };

function addtolist() {
    text = document.getElementById("inputtext").value;
    // console.log(document.getElementById("today").innerHTML)
    var s = document.getElementById(obj[daytoadd]).innerHTML
    console.log(s);
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
        document.getElementById(obj[daytoadd]).innerHTML = s + "<li>" + text + "</li>"
        document.getElementById("inputtext").value = "";
        todaybadgecounter++
        document.getElementById(badge[daytoadd]).innerHTML = ++badgecounter[daytoadd]
        document.getElementById("todaybadgecounters").innerHTML = badgecounter[0]
        document.getElementById("next7daysbadgecounters").innerHTML = badgecounter[0] + badgecounter[1] + badgecounter[2]
        document.getElementById("alltasksbadgecounters").innerHTML = badgecounter[0] + badgecounter[1] + badgecounter[2] + badgecounter[3]


    }
}

var toggletoday = 0,
    toggletomorrow = 0,
    toggleupcoming = 0,
    togglesomeday = 0;

// function toggleclickdaytoday() {
//     if (toggleshortcuts_counter1)
//         document.getElementById("toggleshortcuts1").style.display = "none";
//     else
//         document.getElementById("toggleshortcuts1").style.display = "block";
//     toggleshortcuts_counter1 = !toggleshortcuts_counter1;
// }



function createtask() {
    document.getElementById("inputtext").focus();
}