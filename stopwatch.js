let hour = 0;
let min = 0;
let sec = 0;
let tenMillisec = 0;
const appendHour = document.getElementById("hour");
const appendMin = document.getElementById("min");
const appendSec = document.getElementById("sec");
const appendTens = document.getElementById("tenMillisec");
const start_btn = document.getElementById("startBtn");
const lapse_btn = document.getElementById("lapseBtn");
let intervalId;
let lapse_num = 1;

start_btn.onclick = function () {
  if (start_btn.innerText === "STOP") {
      clearInterval(intervalId); //setInterval이 반환한 id를 인자로 넣으면 그 id를 가진 setInterval이 동작이 멈춘다.
      start_btn.innerText = "START";
      start_btn.style.backgroundColor = "#fde485"
      lapse_btn.innerText = "RESET";
      lapse_btn.style.backgroundColor = "#b5cdb5";
  } else if (start_btn.innerText === "START") {
      clearInterval(intervalId);  //start 두번 클릭시 id가 겹치는 현상을 방지
      intervalId = setInterval(startTimer, 10);
      start_btn.innerText = "STOP";
      start_btn.style.backgroundColor = "#ff9648";
      lapse_btn.innerText = "LAPSE";
      lapse_btn.style.backgroundColor = "#318a9d";
  }
}

lapse_btn.onclick = function () {
  if (lapse_btn.innerText === "LAPSE") {
      const table = document.getElementById("lapse_table");
      const newRow = table.insertRow();
      newRow.insertCell(0).innerText = lapse_num;
      newRow.insertCell(1).innerText = appendHour.textContent + " : " + appendMin.textContent + " : " + appendSec.textContent + " : " + appendTens.textContent;
      document.getElementById("lapse_record").style.visibility = "visible";
      lapse_num++;
    } else if (lapse_btn.innerText === "RESET") {
      clearInterval(intervalId);  
      hour = 0;
      min = 0;
      sec = 0;
      tenMillisec = 0;
      appendHour.textContent = "00";
      appendMin.textContent = "00";
      appendSec.textContent = "00";
      appendTens.textContent = "00";
      document.getElementById("lapse_record").style.visibility = "hidden";
      document.getElementById("lapse_record").textContent = "";
      lapse_num = 1
  }
}



// 10ms마다 시간에 대한 숫자가 증가한다
function startTimer() {
  tenMillisec++;
  appendTens.textContent = tenMillisec > 9 ? tenMillisec : '0' + tenMillisec;
  if(tenMillisec > 99) {
    sec++;
    appendSec.textContent = sec > 9 ? sec : '0' + sec;
    tenMillisec = 0;
    appendTens.textContent = "00";
  }
  if(sec > 59) {
    min++;
    appendMin.textContent = min > 9 ? min : '0' + min;
    sec = 0;
    appendSec.textContent = "00";
  }
  if(min > 59) {
    hour++;
    appendMin.textContent = hour > 9 ? hour : '0' + hour;
    min = 0;
    appendMin.textContent = "00";
  }

}