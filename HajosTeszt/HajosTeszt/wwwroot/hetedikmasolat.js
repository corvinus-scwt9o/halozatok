

var aktualis;
var o = 1;

function letöltés() {
    /*fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
    );*/
    fetch('/questions/1')
        .then(response => response.json())
        .then(data => kérdésMegjelenítés(data)
        );
}
/*function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(o);
}*/

function kérdésMegjelenítés(kérdés) {
    /*document.getElementById("kérdés_szöveg").innerHTML = kérdések[kérdés].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[kérdés].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[kérdés].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[kérdés].answer3;
    if (kérdések[kérdés].image != "") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image;
    }
    Clear();*/
    aktualis = kérdés;
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    if (kérdés.image != "") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    }
    else {
        document.getElementById("kép").src = "";
    }

}

function Hátra() {

    /*if (o == 0) {
        o = kérdések.length - 1;
        letöltés();
    }
    else {
        o--;
        letöltés();
    }*/
    if (o == 1) {
        o = 859;
    }
    else {
        o--;
    }
    kérdésBetöltés(o);
    Clear();
}

function Előre() {
    if (o == 859) {
        o = 1;
    }
    else {
        o++;
    }
    kérdésBetöltés(o);
    Clear();
}
/*
if (o == kérdések.length - 1) {
    o = 0;
    letöltés();
}
else {
    o++;
    letöltés();
}*/




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
    if (n == aktualis.correctAnswer) {
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




function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
}    