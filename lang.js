const lang = {
  en: {
    font: 'SuseongHyejeong',
    title: "Online Stopwatch",
    START: "START",
    STOP: "STOP",
    LAP: "LAP",
    RESET: "RESET",
    TotalTime: "Total Time",
    HideTime: "Hide Current Time",
    HideMs: "Hide Milliseconds",
    DarkMode: "Dark Mode"
  },
  ko: {
    font: 'EarlyFontDiary',
    title: "온라인 스톱워치",
    START: "시작",
    STOP: "정지",
    LAP: "랩",
    RESET: "초기화",
    TotalTime: "전체 시간",
    HideTime: "현재 시간 숨기기",
    HideMs: "밀리초 숨기기",
    DarkMode: "다크모드"
  }, 
};

// ** 현재 브라우저의 언어 가져오기 **
function getLanguage() {
  return navigator.language || navigator.userLanguage;
}

// 언어별 적용
// function init(localeStr) {
//   document.getElementById("locale").textContent = localeStr;
// }

// 초기 작업
const currentLang = getLanguage();
// init(currentLang);
render(currentLang.substr(0, 2));

// 언어별 렌더링
function render(locale) {
  const $lang = document.querySelectorAll("[data-lang]");
  document.fontFamily = lang[locale][0];
  $lang.forEach(el => {
    const code = el.dataset.lang;
    el.textContent = lang[locale][code];
  })
}

// document.getElementById("btn-en").addEventListener("click", e => {
//   render("en")
// })
// document.getElementById("btn-ko").addEventListener("click", e => {
//   render("ko")
// })
