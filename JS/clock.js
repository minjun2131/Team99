const today = document.querySelector(".today");
const clock = document.querySelector(".clock");

function getClock() {
  const date = new Date();

  const currentHours = String(date.getHours()).padStart(2, "0");
  const currentMinutes = String(date.getMinutes()).padStart(2, "0");
  const currentSeconds = String(date.getSeconds()).padStart(2, "0");

  const currentTime = `, ${currentHours}:${currentMinutes}:${currentSeconds}`;
  clock.innerText = currentTime;
}

function getToday() {
  const date = new Date();

  const thisyear = String(date.getFullYear());
  const thismonth = String(date.getMonth() + 1).padStart(2, "0");
  const thisday = String(date.getDate()).padStart(2, "0");

  const days = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  let koreanDay = days[date.getDay()];

  const currnetDay = `${thisyear}/${thismonth}/${thisday}  ${koreanDay}`;
  today.innerText = currnetDay;
}

getToday();
getClock();
setInterval(getClock, 1000);
