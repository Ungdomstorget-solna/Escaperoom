
let kod_1;
let kod_2;
const soundAuthorize = document.getElementById("codeAuthorize")
const soundFail = document.getElementById("codeFail")
const soundShout = document.getElementById("soundShout")

//kod 1
document.getElementById("enterKnapp1").onclick = function(){
    kod_1 = document.getElementById("textbox1").value
        //rätt kod här under
        if (kod_1 === "HAZARD" || kod_1 === "hazard" || kod_1 === "Hazard") {
            document.getElementById("label1").textContent = 'Kod 1: ' + kod_1
            var element = document.getElementById("div2")
            element.classList.replace("hiddenElement", "visibleElement")
            playAudio(soundAuthorize)
            let doldKnapp = document.getElementById("spanEnter1")
            doldKnapp.classList.add("hiddenElement")
            let doldRubrik = document.getElementById("kodRubrik1")
            doldRubrik.classList.add("hiddenElement")
        }
        else {
            document.getElementById("label1").textContent = kod_1 + ' : FEL';
            playAudio(soundFail);
        }
    }
//kod 2
document.getElementById("enterKnapp2").onclick = function(){
    kod_2 = document.getElementById("textbox2").value
        //rätt kod här under
        if (kod_2 === "ATLAS" || kod_2 === "atlas" || kod_2 === "Atlas") {
            document.getElementById("label2").textContent = 'Kod 2: ' + kod_2
            var element = document.getElementById("div3")
            element.classList.replace("hiddenElement", "visibleElement")
            playAudio(soundAuthorize)
            let doldKnapp = document.getElementById("spanEnter2")
            doldKnapp.classList.add("hiddenElement")
            let doldRubrik = document.getElementById("kodRubrik2")
            doldRubrik.classList.add("hiddenElement")
        }
        else {
            document.getElementById("label2").textContent = kod_2 + ' : FEL'
            playAudio(soundFail)
        }
}
//kod 3
document.getElementById("enterKnapp3").onclick = function(){
    kod_3 = document.getElementById("textbox3").value
        //rätt kod här under
        if (kod_3 === "SALTA" || kod_3 === "salta" || kod_3 === "Salta") {
            document.getElementById("label3").textContent = 'Kod 3: ' + kod_3
            var element = document.getElementById("div4")
            element.classList.replace("hiddenElement", "visibleElement")
            playAudio(soundAuthorize)
            let doldKnapp = document.getElementById("spanEnter3")
            doldKnapp.classList.add("hiddenElement")
            let doldRubrik = document.getElementById("kodRubrik3")
            doldRubrik.classList.add("hiddenElement")
        }
        else {
            document.getElementById("label3").textContent = kod_3 + ' : FEL'
            playAudio(soundFail)
        }
}


//tryck på bild, första bilden bytes i tre sekunder
document.getElementById("bildKnapp").onclick = function() {
    document.getElementById("virusImg").src="ravenEnd.jpg"
    playAudio(soundShout)
    setTimeout(virusImgReturn, 3000)
    //visa upp fotografi på ledtråden.. låt det vara i tre sekunder.
}

//spela upp ljud
function playAudio(theAudio) {
    theAudio.play();
}

function virusImgReturn() {
    document.getElementById("virusImg").src="virus.jpg"
}


//timer - lägg till startknapp och stopp efter sista koden.
const startingMinutes = 60;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countDown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}
