let hour = 0;
let min = 0;
let sec = 0;
let tenMillisec = 0;
const appendHour = document.getElementById("hour");
const appendMin = document.getElementById("min");
const appendSec = document.getElementById("sec");
const appendTens = document.getElementById("tenMillisec");
const start_btn = document.getElementById("startBtn");
const stop_btn = document.getElementById("stopBtn");
const lap_btn = document.getElementById("lapBtn");
const reset_btn = document.getElementById("resetBtn");
const setting = document.getElementById("setting");
let intervalId;
let lap_num = 1;

//start
start_btn.onclick = function () {
  clearInterval(intervalId);  //start 두번 클릭시 id가 겹치는 현상을 방지
  intervalId = setInterval(startTimer, 10);
  start_btn.style.display = "none";
  stop_btn.style.display = "";
  reset_btn.style.display = "none";
  lap_btn.style.display = "";
}

//stop
stop_btn.onclick = function () {
  clearInterval(intervalId); //setInterval이 반환한 id를 인자로 넣으면 그 id를 가진 setInterval이 동작이 멈춘다.
  stop_btn.style.display = "none";
  start_btn.style.display = "";
  lap_btn.style.display = "none";
  reset_btn.style.display = "";
}

//lap, reset
const table = document.getElementById("lap_table");
lap_btn.onclick = function () {
  const newRow = table.insertRow();
  newRow.insertCell(0).innerText = lap_num;
  newRow.insertCell(1).innerText = appendHour.textContent + " : " + appendMin.textContent + " : " + appendSec.textContent + " : " + appendTens.textContent;
  document.getElementById("lap_record").style.visibility = "visible";
  lap_num++;
}

reset_btn.onclick = function () {
  clearInterval(intervalId);
      document.getElementById("lap_record").style.visibility = "hidden";
      for (let i = 0; i < lap_num - 1; i++){
        table.deleteRow(-1);
      }
      hour = 0;
      min = 0;
      sec = 0;
      tenMillisec = 0;
      appendHour.textContent = "00";
      appendMin.textContent = "00";
      appendSec.textContent = "00";
      appendTens.textContent = "00";
      lap_num = 1
}

// 10ms마다 시간에 대한 숫자가 증가한다
function startTimer() {
  let titleAppend = '';
  tenMillisec++;
  appendTens.textContent = modifyTime(tenMillisec);
  if(tenMillisec > 99) {
    sec++;
    appendSec.textContent = modifyTime(sec);
    tenMillisec = 0;
    appendTens.textContent = "00";
  }
  if(sec > 59) {
    min++;
    appendMin.textContent = modifyTime(min);
    sec = 0;
    appendSec.textContent = "00";
  }
  if (min <= 59) {
    titleAppend = modifyTime(min) + ":" + modifyTime(sec);
  } else if(min > 59) {
    hour++;
    appendMin.textContent = modifyTime(hour);
    min = 0;
    appendMin.textContent = "00";
    titleAppend = modifyTime(hour) + ":" + modifyTime(min) + ":" + modifyTime(sec);
  }
  document.title = titleAppend + " - StopWatch";
}

//시간 숨김 기능
const hideClockCheck = document.getElementById('hide_clock');
hideClockCheck.addEventListener('change', () => {
  if (hideClockCheck.checked) {
    stopwatch_clock.style.display = 'none';
  } else {
    stopwatch_clock.style.display = 'block';
  }
});

//밀리초 숨김 기능
const hideModalCheck = document.getElementById('hide_modal');
hideModalCheck.addEventListener('change', () => {
  if (hideModalCheck.checked) {
    appendTens.style.display = 'none';
  } else {
    appendTens.style.display = 'block';
  }
});

//전체 화면
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const descript = document.getElementById('descript');
const stopwatch_main = document.getElementById('stopwatch_main');
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    header.style.visibility = "hidden";
    footer.style.visibility = "hidden";
    descript.style.visibility = "hidden";
    body.style.overflow='hidden';
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      header.style.visibility = "visible";
      footer.style.visibility = "visible";
      descript.style.visibility = "visible";
      body.style.overflow='auto';
    }
  }
}