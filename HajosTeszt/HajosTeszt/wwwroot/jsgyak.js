/*var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i =< n; i++) {
        er = er * i;
    }
    return er
}*/
/*window.onload = function () {

    let hova = document.getElementById("pascal")
    
    for (var s = 0; s < 10; s++) {

        let sor = document.createElement("div");
        sor.classList.add("sor");
        hova.appendChild(sor);
       

        for (var o = 0; o < 10; o++) {

            let elem = document.createElement("div");
            
            elem.innerText = (s + 1) * (o + 1);
            elem.classList.add("elem");
            sor.appendChild(elem);
            elem.style.background =rgb(${255},0,0)
        }
    }
}*/

window.onload = function () {



    let hova = document.getElementById("ide")
    let sor = document.createElement("div");
    sor.classList.add("sor");
    hova.appendChild(sor);
    for (var o = 0; o < 10; o++) {
        let szám = document.createElement("div");
        sor.appendChild(szám);
        szám.classList.add("elem");
        szám.innerText = o + 1;
        szám.style.background = `rgb(${ 255 - (20 * o) }, 0, 0)`;
    }

    //PASCAL

    var faktoriális = function (n) {
        let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}

for (var s = 0; s < 10; s++) {

    let where = document.getElementById("pascal");
    let sor = document.createElement("div");
    sor.classList.add("sor");
    where.appendChild(sor);

    for (var o = 0; o <= s; o++) {

        let szam = document.createElement("div");
        sor.appendChild(szam);
        szam.classList.add("elem");
        szam.innerText = faktoriális(s) / (faktoriális(o) * (faktoriális(s - o)));
    }
}

}
