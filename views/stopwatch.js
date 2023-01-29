"use strict"

const stopButton = document.getElementById("stop");
const startButton = document.getElementById("start");
let minPart = document.getElementById("min");
let secPart = document.getElementById("sec");
let milisecPart = document.getElementById("milisec");
let watch = document.getElementById("stopWatch");
let min = 0;
let sec = 0;
let milisec = 0;
let stopper = null;

function increase(){

    startButton.style.visibility = "hidden";
    stopButton.style.visibility = "visible";

    if(sec == 59 && milisec == 99){
        min ++;
        sec = -1;
        if(min <= 9){
            minPart.innerHTML = "0" + min;
        }else if(min > 9) minPart.innerHTML = min;
    }
    if(milisec == 99){
        sec++;
        milisec = 0;
        if(sec <=9){
            secPart.innerHTML = "0" + sec;
        }else if(sec > 9) secPart.innerHTML = sec; 
    }else{
        milisec++;
    }
    if(milisec<=9){
        milisecPart.innerHTML = "0" + milisec;
    }else if(milisec>9) milisecPart.innerHTML = milisec;
    
    stopper = setTimeout(increase, 5);
};

function stop(){
    startButton.style.visibility = "visible";
    stopButton.style.visibility = "hidden   ";

    clearTimeout(stopper);
}

function reset(){
    stop();
    minPart.innerHTML = "00";
    secPart.innerHTML = "00";
    milisecPart.innerHTML = "00";
}



// //시계 중지
// function stopClock() {
//     if (timerId != null) {
//         clearTimeout(timerId);
//     }
// }

// // 시계 초기화
// function resetClock() {
//     stopClock()
//     stopwatch.innerText = "00:00:00";
//     time = 0;
// }

// // 시간(int)을 시, 분, 초 문자열로 변환
// function getTimeFormatString() {
//     hour = parseInt(String(time / (60 * 60)));
//     min = parseInt(String((time - (hour * 60 * 60)) / 60));
//     sec = time % 60;

//     return String(hour).padStart(2, '0') + ":" + String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
// }