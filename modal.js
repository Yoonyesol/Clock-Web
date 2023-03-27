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
    if (document.querySelector('table')) {
      document.querySelector('table').style.borderTopColor = "#444444";
    }
  }
});