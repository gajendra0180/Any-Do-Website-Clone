var toggleshortcuts_counter = 0
var toggleshortcuts_counter1 = 0
var text = ""
var freeuserlimit = 0
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
        if (element == " ") //check if only spaces are there in input
            counter++;
    }
    if (counter == text.length)
        createtask();
    else {

        if (freeuserlimit != 10) {
            freeuserlimit++;
            document.getElementById(obj[daytoadd]).innerHTML = s + "<li id=deletetask" + deletetask + " onclick=deletetask" + deletetask + "()" + ">" + text + '<img src="/images/delete.svg" alt="">' + "</li>";
            deletetask++;
            document.getElementById("inputtext").value = "";
            todaybadgecounter++
            document.getElementById(badge[daytoadd]).innerHTML = ++badgecounter[daytoadd]
            document.getElementById("todaybadgecounters").innerHTML = badgecounter[0]
            document.getElementById("next7daysbadgecounters").innerHTML = badgecounter[0] + badgecounter[1] + badgecounter[2]
            document.getElementById("alltasksbadgecounters").innerHTML = badgecounter[0] + badgecounter[1] + badgecounter[2] + badgecounter[3]
        } else {
            alert("Sorry You Have Exceede the free limit");
        }

    }
}

//They are for task deleted
var deletetask = 1;

function deletetask() {
    todaybadgecounter--;
    document.getElementById(badge[daytoadd]).innerHTML = --badgecounter[daytoadd]
    document.getElementById("todaybadgecounters").innerHTML = badgecounter[0]
    document.getElementById("next7daysbadgecounters").innerHTML = badgecounter[0] + badgecounter[1] + badgecounter[2]
    document.getElementById("alltasksbadgecounters").innerHTML = badgecounter[0] + badgecounter[1] + badgecounter[2] + badgecounter[3]
}

function deletetask1() {
    console.log("Reached");
    document.getElementById("deletetask1").innerHTML = "";
    deletetask();
}

function deletetask2() {
    console.log("Reached");
    document.getElementById("deletetask2").innerHTML = "";
    deletetask();

}

function deletetask3() {
    console.log("Reached");
    document.getElementById("deletetask3").innerHTML = "";
    deletetask();

}

function deletetask4() {
    console.log("Reached");
    document.getElementById("deletetask4").innerHTML = "";
    deletetask();

}

function deletetask5() {
    console.log("Reached");
    document.getElementById("deletetask5").innerHTML = "";
    deletetask();
}

function deletetask6() {
    console.log("Reached");
    document.getElementById("deletetask6").innerHTML = "";
    deletetask();
}

function deletetask7() {
    console.log("Reached");
    document.getElementById("deletetask7").innerHTML = "";
    deletetask();
}

function deletetask8() {
    console.log("Reached");
    document.getElementById("deletetask8").innerHTML = "";
    deletetask();
}

function deletetask9() {
    console.log("Reached");
    document.getElementById("deletetask9").innerHTML = "";
    deletetask();
}

function deletetask10() {
    console.log("Reached");
    document.getElementById("deletetask10").innerHTML = "";
    deletetask();
}

//task deleted till here

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