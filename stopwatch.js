let hour = 0;
let min = 0;
let sec = 0;
let tenMillisec = 0;
const appendHour = document.getElementById("hour");
const appendMin = document.getElementById("min");
const appendSec = document.getElementById("sec");
const appendTens = document.getElementById("tenMillisec");
const start_btn = document.getElementById("startBtn");
const lap_btn = document.getElementById("lapBtn");
const setting = document.getElementById("setting");
let intervalId;
let lap_num = 1;

//start, stop
start_btn.onclick = function () {
  if (start_btn.innerText === "STOP") {
      clearInterval(intervalId); //setInterval이 반환한 id를 인자로 넣으면 그 id를 가진 setInterval이 동작이 멈춘다.
      start_btn.innerText = "START";
      start_btn.style.backgroundColor = "#fde485"
      lap_btn.innerText = "RESET";
      lap_btn.style.backgroundColor = "#b5cdb5";
  } else if (start_btn.innerText === "START") {
      clearInterval(intervalId);  //start 두번 클릭시 id가 겹치는 현상을 방지
      intervalId = setInterval(startTimer, 10);
      start_btn.innerText = "STOP";
      start_btn.style.backgroundColor = "#ff9648";
      lap_btn.innerText = "LAP";
      lap_btn.style.backgroundColor = "#318a9d";  
  }
}

//lap, reset
const table = document.getElementById("lap_table");
lap_btn.onclick = function () {
  if (lap_btn.innerText === "LAP") {
      const newRow = table.insertRow();
      newRow.insertCell(0).innerText = lap_num;
      newRow.insertCell(1).innerText = appendHour.textContent + " : " + appendMin.textContent + " : " + appendSec.textContent + " : " + appendTens.textContent;
      document.getElementById("lap_record").style.visibility = "visible";
      lap_num++;
    } else if (lap_btn.innerText === "RESET") {
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
  document.title = titleAppend + " - Clockck";
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

//모달 조작
const modal = document.querySelector('.modal');
const closeBtn = document.getElementById('close_modal_btn');
setting.addEventListener('click', () => {
  modal.classList.toggle('show');
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
      modal.classList.toggle('show');
    }
});

//모달 닫기 버튼
closeBtn.addEventListener('click', (event) => {
  modal.classList.toggle('show');
})

//다크모드
const body = document.querySelector('body');
const darkmode = document.getElementById('darkmode');
darkmode.addEventListener('change', () => {
  if(darkmode.checked){  //다크모드로 전환
    body.style.backgroundColor = "#2a283f";  //배경색 변경
    body.style.color = 'white'; //css가 적용되지 않은 기본 텍스트 색상 변경
    modal.style.color = "black";
    document.querySelector('table').style.borderTopColor = "white";
  } else { //라이트모드
    body.style.backgroundColor = 'rgb(250, 250, 239)';
    body.style.color = 'black';
    document.querySelector('table').style.borderTopColor = "#444444";
  }
});