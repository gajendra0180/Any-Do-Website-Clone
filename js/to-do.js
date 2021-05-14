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
    document.getElementById("Todayday").style.color = "red";
    document.getElementById("Tomorrowday").style.color = " black";
    document.getElementById("upcomingday").style.color = " black";
    document.getElementById("Somedayday").style.color = " black";
}

function daytoadd_tomorrow() {
    toggletomorrow = !toggletomorrow
    if (toggletomorrow)
        document.getElementById("Tomorrow").style.display = "none";
    else
        document.getElementById("Tomorrow").style.display = "block";
    daytoadd = 1
    document.getElementById("Tomorrowday").style.color = " red";
    document.getElementById("Todayday").style.color = " black";
    document.getElementById("upcomingday").style.color = " black";
    document.getElementById("Somedayday").style.color = " black";


}

function daytoadd_upcoming() {
    toggleupcoming = !toggleupcoming
    if (toggleupcoming)
        document.getElementById("upcoming").style.display = "none";
    else
        document.getElementById("upcoming").style.display = "block";
    daytoadd = 2
    document.getElementById("upcomingday").style.color = " red";
    document.getElementById("Todayday").style.color = " black";
    document.getElementById("Tomorrowday").style.color = " black";
    document.getElementById("Somedayday").style.color = " black";

}

function daytoadd_someday() {
    togglesomeday = !togglesomeday
    if (togglesomeday)
        document.getElementById("Someday").style.display = "none";
    else
        document.getElementById("Someday").style.display = "block";
    daytoadd = 3
    document.getElementById("Somedayday").style.color = " red";
    document.getElementById("Todayday").style.color = " black";
    document.getElementById("Tomorrowday").style.color = " black";
    document.getElementById("upcomingday").style.color = " black";

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
        document.getElementById(obj[daytoadd]).innerHTML = s + "<li>" + text + '<img src="/images/delete.svg" alt="">' + "</li> ";
        document.getElementById("inputtext").value = "";
        todaybadgecounter++
        document.getElementById(badge[daytoadd]).innerHTML = ++badgecounter[daytoadd]
        document.getElementById("todaybadgecounters").innerHTML = badgecounter[0]
        document.getElementById("next7daysbadgecounters").innerHTML = badgecounter[0] + badgecounter[1] + badgecounter[2]
        document.getElementById("alltasksbadgecounters").innerHTML = badgecounter[0] + badgecounter[1] + badgecounter[2] + badgecounter[3]


    }
}

var toggletoday = 1,
    toggletomorrow = 1,
    toggleupcoming = 1,
    togglesomeday = 1;

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