

var kérdések;
var o = 0;

function letöltés() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
}
function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(o);
}

function kérdésMegjelenítés(kérdés) {
    document.getElementById("kérdés_szöveg").innerHTML = kérdések[kérdés].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[kérdés].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[kérdés].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[kérdés].answer3;
    if (kérdések[kérdés].image != "") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image;
    }
    Clear();
}

function Hátra() {
    if (o == 0) {
        o = kérdések.length - 1;
        letöltés();
    }
    else {
        o--;
        letöltés();
    }
}
function Előre() {
    if (o == kérdések.length - 1) {
        o = 0;
        letöltés();
    }
    else {
        o++;
        letöltés();
    }
}



window.onload = function () {
    letöltés();   
    
}

function válasz1Click() {
    valaszCheck(1);
}
function válasz2Click() {
    valaszCheck(2);
}
function válasz3Click() {
    valaszCheck(3);
}

function valaszCheck(n) {
    if (n == kérdések[o].correctAnswer) {
        document.getElementById("válasz" + n).classList.add("jo");
    }
    else {
        document.getElementById("válasz" + n).classList.add("rossz");
    }
}

function Clear() {
    document.getElementById("válasz1").classList.remove("jo");
    document.getElementById("válasz1").classList.remove("rossz");
    document.getElementById("válasz2").classList.remove("jo");
    document.getElementById("válasz2").classList.remove("rossz");
    document.getElementById("válasz3").classList.remove("jo");
    document.getElementById("válasz3").classList.remove("rossz");
}