

/*var jovalasz;
var questionId;

var hotList = [];           //Az éppen gyakoroltatott kérdések listája 
var questionsInHotList = 3; //Ez majd 7 lesz, teszteléshez jobb a 3. 
var displayedQuestion;      //A hotList-ből éppen ez a kérdés van kint
var numberOfQuestions;      //Kérdések száma a teljes adatbázisban
var nextQuestion = 1;       //A következő kérdés száma a teljes listában

/*function letöltés() {
    /*fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
    );
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
}

function kérdésMegjelenítés(kérdés) {
    /*document.getElementById("kérdés_szöveg").innerHTML = kérdések[kérdés].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[kérdés].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[kérdés].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[kérdés].answer3;
    if (kérdések[kérdés].image != "") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image;
    }
    Clear();
    let kérdés = hotList[displayedQuestion].question;
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    if (kérdés.image != "") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    }
    else
    {
        document.getElementById("kép").src = "";
    }
    if (!kérdés) return; //Ha undefined a kérdés objektum, nincs mit tenni
    let kérdés = hotList[displayedQuestion].question;
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    jóVálasz = kérdés.correctAnswer;
    if (kérdés.image) {
        document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
        document.getElementById("kép").classList.remove("rejtett")
    }
    else {
        document.getElementById("kép").classList.add("rejtett")
    }
    //Jó és rossz kérdések jelölésének levétele
    document.getElementById("válasz1").classList.remove("jó", "rossz");
    document.getElementById("válasz2").classList.remove("jó", "rossz");
    document.getElementById("válasz3").classList.remove("jó", "rossz");
    
}

function Hátra() {
   
    /*if (o == 0) {
        o = kérdések.length - 1;
        letöltés();
    }
    else {
        o--;
        letöltés();
    }
    if (o == 1) {
        o = 859;
    }
    else {
        o--;
    }
    kérdésBetöltés(o);
    Clear();
    questionId--;
    kérdésBetöltés(questionId)
    }

function Előre() {
    displayedQuestion++;
    if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
    kérdésMegjelenítés()
}
    /*
    if (o == kérdések.length - 1) {
        o = 0;
        letöltés();
    }
    else {
        o++;
        letöltés();
    }




window.onload = function (e) {
    console.log("Oldal betöltve...");
    document.getElementById("előre_gomb").onclick = előre;
    document.getElementById("vissza_gomb").onclick = vissza;
    kérdésBetöltés(questionId)
    
}

/*function válasz1Click() {
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




function kérdésBetöltés(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(result => {
            if (!result.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return result.json()
            }
        })
        .then(
            q => {
                hotList[destination].question = q;
                hotList[destination].goodAnswers = 0;
                console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`)
                if (displayedQuestion == undefined && destination == 0) { //!!!!!!!!!!!!!
                    displayedQuestion = 0;
                    kérdésMegjelenítés();
                }
            }
        );
}    

function választás(n) {
    if (n != jovalasz) {
        document.getElementById(`válasz${n}`).classList.add("rossz");
        document.getElementById(`válasz${jovalasz}`).classList.add("jó");
    }
    else {
        document.getElementById(`válasz${jovalasz}`).classList.add("jó");
    }
}

function init() {
    for (var i = 0; i < questionsInHotList; i++) {
        let q = {
            question: {},
            goodAnswers: 0
        }
        hotList[i] = q;
    }

    //Első kérdések letöltése
    for (var i = 0; i < questionsInHotList; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }
}*/

/*var kérdések;
var aktualkerdes;
var kérdésszám = 1;*/


var hotList = [];
var questionsInHotList = 3;
var displayedQuestion;
var numberOfQuestions;
var nextQuestion = 1;
var timerHandler;

document.addEventListener("DOMContentLoaded", init)





function init() {
    for (var i = 0; i < questionsInHotList; i++) {
        hotList[i] = {
            question: {},
            goodAnswers: 0
        }

    }




    fetch("/questions/count").then(result => result.text()).then(n => { numberOfQuestions = parseInt(n) })


    if (localStorage.getItem("hotList")) {
        hotList = JSON.parse(localStorage.getItem("hotList"));
    }
    if (localStorage.getItem("displayedQuestion")) {
        displayedQuestion = parseInt(localStorage.getItem("displayedQuestion"));
    }
    if (localStorage.getItem("nextQuestion")) {
        nextQuestion = parseInt(localStorage.getItem("nextQuestion"));
    }

    if (hotList.length === 0) {
        for (let i = 0; i < questionsInHotList; i++) {
            kérdésBetöltés(nextQuestion, i);
            nextQuestion++;
        }
    }
    else {
        console.log("Localstorageból olvasott kérdések betöltése");
        kérdésMegjelenítés();
    }
}

function kérdésMegjelenítés() {


    let kérdés = hotList[displayedQuestion].question;
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText;
    document.getElementById("válasz1").innerText = kérdés.answer1;
    document.getElementById("válasz2").innerText = kérdés.answer2;
    document.getElementById("válasz3").innerText = kérdés.answer3;
    if (kérdés.image) {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
        document.getElementById("kép1").style.display = "block";

    }
    else {
        document.getElementById("kép1").style.display = "none";
    }

    for (var i = 1; i <= 3; i++) {
        document.getElementById("válasz" + i).classList.remove("jo", "rossz")
    }
    document.getElementById("válaszok").style.pointerEvents = "auto";
}



function Vissza() {


    displayedQuestion--;
    if (displayedQuestion < 0) displayedQuestion = questionsInHotList - 1;
    kérdésMegjelenítés()



}

function Elore() {

    clearTimeout(timerHandler);

    displayedQuestion++;
    if (displayedQuestion === questionsInHotList) displayedQuestion = 0;
    kérdésMegjelenítés()


}


function valasz1Click() {

    valaszCheck(1);
}

function valasz2Click() {

    valaszCheck(2);
}

function valasz3Click() {

    valaszCheck(3);
}



function valaszCheck(n) {


    let kérdés = hotList[displayedQuestion].question;
    if (n === kérdés.correctAnswer) {
        document.getElementById("válasz" + n).classList.add("jo")
        hotList[displayedQuestion].goodAnswers++;
        if (hotList[displayedQuestion].goodAnswers === 3) {
            kérdésBetöltés(nextQuestion, displayedQuestion);
            nextQuestion++;
        }
    }
    else {
        document.getElementById("válasz" + n).classList.add("rossz")
        document.getElementById("válasz" + kérdés.correctAnswer).classList.add("jo")
        hotList[displayedQuestion].goodAnswers = 0;
    }

    document.getElementById("válaszok").style.pointerEvents = "none";

    timerHandler = setTimeout(Elore, 3000);

    localStorage.setItem("hotList", JSON.stringify(hotList));
    localStorage.setItem("displayedQuestion", displayedQuestion);
    localStorage.setItem("nextQuestion", nextQuestion);
}




function Clear() {
    document.getElementById("válasz1").classList.remove("jo");
    document.getElementById("válasz1").classList.remove("rossz");
    document.getElementById("válasz2").classList.remove("jo");
    document.getElementById("válasz2").classList.remove("rossz");
    document.getElementById("válasz3").classList.remove("jo");
    document.getElementById("válasz3").classList.remove("rossz");
}


function kérdésBetöltés(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(
            result => {
                if (!result.ok) {
                    console.error(`Hibás letöltés: ${response.status}`);
                    return null;
                }
                else {
                    return result.json();
                }
            })
        .then(q => {
            hotList[destination].question = q;
            hotList[destination].goodAnswers = 0;
            console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`);
            if (displayedQuestion === undefined && destination === 0) {
                displayedQuestion = 0;
                kérdésMegjelenítés();
            }
        })
}    