var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};




//Function For Validating Credit Card starts here

function makepayment() {
    let cardnumber = document.getElementById("cardnumber").value;
    if (cardnumber == "") {
        document.getElementById("cardnumber").focus();
    }
    let month_year = document.getElementById("month_year").value;
    if (month_year == "") {
        document.getElementById("month_year").focus();
    }
    let cvcode = document.getElementById("cvcode").value;
    if (cvcode == "") {
        document.getElementById("cvcode").focus();
    }
    let cardowner = document.getElementById("cardowner").value;
    if (cardowner == "") {
        document.getElementById("cardowner").focus();
    }
    if (cardnumber != "" && cardowner != "" && cvcode != "" && month_year != "") {
        document.getElementById("cvcode").style.borderColor = "Red";
        document.getElementById("cvcode").focus();
        document.getElementById("cardnumber").value = "";
        document.getElementById("month_year").value = "";
        document.getElementById("cvcode").value = "";
        document.getElementById("cardowner").value = "";
        document.getElementById("cardnumber").placeholder = "Invalid Card Number Or CV";
        document.getElementById("cvcode").placeholder = "Invalid CV";
        document.getElementById("cardnumber").style.borderColor = "Red";
        document.getElementById("cardnumber").focus();
        let slashcheckerinmonth_year = 0;
        for (let i = 0; i < month_year.length; i++) {
            if (month_year[i] == '/')
                slashcheckerinmonth_year = 1;
        }
        if (slashcheckerinmonth_year == 0) {
            document.getElementById("month_year").style.borderColor = "Red";
            document.getElementById("month_year").placeholder = "Wrong Format";
        }
    }
}

//Function FOr Validating Credit card ends here