let seconds = 00;
let tens = 00;
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let buttonStart = document.getElementById("button-start");
let buttonStop = document.getElementById("button-stop");
let buttonReset = document.getElementById("button-reset");
let interval; //to store timer
let timerRunning = false;

// this function will run when click on start

function startTimer(){
    if(timerRunning === false){
        timerRunning = true; 
    }
}

function startTime(){
    if (timerRunning === true) {
        tens++
        if(tens<9){
            appendTens.innerHTML = "0" + tens;
        }
        if(tens>9){
            appendTens.innerHTML = tens;
        }
        if(tens>99){
            seconds++
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if(seconds>9){
            appendSeconds.innerHTML = seconds;
        }
    }
}

buttonStart.onclick = function(){
    interval = setInterval(startTime);
    startTimer();
}
buttonStop.onclick = function(){
    clearInterval(interval);
    timerRunning = false;
}
buttonReset.onclick = function(){
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}