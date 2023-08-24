var Timer = 60;
var score = 0;
var rn = 0;

function getnewhit(){
     rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;
}    

function makebubble() {
    let clutter = "";

    for (var i = 1; i <= 76; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter
}

function runTimer() {
    var timeint = setInterval(function () {

        if (Timer > 0) {
            Timer--;
            document.querySelector("#timerval").textContent = Timer;
        }
        else {
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `GAME OVER`
        }


    }, 1000);
}

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum = (Number(dets.target.textContent));
    if(clickedNum === rn){
        increaseScore();
        makebubble();
        getnewhit();
    }

})


runTimer();
makebubble();
getnewhit();