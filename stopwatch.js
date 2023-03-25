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
const tool = document.getElementById("tools");
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
      for (let i = 0; i < lap_num; i++){
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

//모달 조작
const modal = document.querySelector('.modal');
const tools = document.getElementById('tools');
const closeBtn = document.getElementById('close_modal_btn');
tools.addEventListener('click', () => {
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
  
//밀리초 숨김 기능
const hideCheck = document.getElementById('hide');
hideCheck.addEventListener('change', () => {
  if (hideCheck.checked) {
    appendTens.style.display = 'none';
  } else {
    appendTens.style.display = 'block';
  }
});