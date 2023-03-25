const stopwatch_clock = document.getElementById("current_time");
function setClock() {
  let today = new Date();
  let curentHours = today.getHours(); //시
  let curentMinutes = today.getMinutes();  // 분
  let curentSeconds = today.getSeconds();  // 초
  stopwatch_clock.textContent = modifyTime(curentHours) + ':' + modifyTime(curentMinutes) + ':' + modifyTime(curentSeconds);
}
//한자리수일 때 보정
function modifyTime(time) {
  return parseInt(time) < 10 ? "0" + time : time;
}
window.onload = function(){
  setClock();
  setInterval(setClock, 1000); //1초마다 setClock 함수 실행
}