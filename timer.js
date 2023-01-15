var startingMinutes = document.getElementById('pomodoro').value;
// var startingMinutes = 1/60;
let time = startingMinutes * 60;
let interval = null;
const countdownEl = document.getElementById("timer");

let startFlag = false;
timer_button = document.getElementById("timer-button")
pomodoro = document.getElementById("pomdoro");

timer_button.addEventListener("click", () => {
    if(!startFlag) {
        startFlag = true;

        if(time == 0){
            startingMinutes = document.getElementById('pomodoro').value;
            // var startingMinutes = 1/60;
            time = startingMinutes * 60;
            interval = null;
        }


        document.getElementById("timer-button").innerHTML="PAUSE";
        
        interval = setInterval(updateCountdown, 1000);

    }
    else {
        startFlag = false;
        document.getElementById("timer-button").innerHTML="START";
        clearInterval(interval);
        interval = null;
    }
    

    function updateCountdown() {
        const minutes = Math.floor(time/60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countdownEl.innerHTML = `${minutes}:${seconds}`;
        if(time > 0) {
            time--;
        }
        if(time == 0) {
            const audio = new Audio('bgm/notif.mp3');
            audio.play();
           
        }
    }
});



