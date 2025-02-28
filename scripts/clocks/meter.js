import {
  getSmoothSecondDialDegree,
  getMinuteDialDegree,
  getHourDialDegree,
} from "../utilities/dials.js";
import { padZeros } from "../utilities/numbers.js";
import { getDayShort, getMonthShort } from "../utilities/strings.js";

const render = () => {
  // Get main clock component
  const clock = document.querySelector("#meter");

  // Create clock frame
  const secondFrame = document.createElement("div");
  secondFrame.className = "meter__frame--second";
  clock.append(secondFrame);

  const minuteFrame = document.createElement("div");
  minuteFrame.className = "meter__frame--minute";

  const hourFrame = document.createElement("div");
  hourFrame.className = "meter__frame--hour";

  const digitalFrame = document.createElement("div");
  digitalFrame.className = "meter__frame--digital";

  // Create clock grids
  for (let i = 0; i < 120; i++) {
    const second = i + 1;
    const grid = document.createElement("div");
    grid.classList.add("meter__grid");
    grid.classList.add("meter__grid--second");
    if (second % 10 == 0) {
      grid.classList.add("meter__grid--light");
    }
    grid.style.transform = `rotate(${second * 3}deg)`;
    secondFrame.append(grid);
  }

  for (let i = 0; i < 120; i++) {
    const second = i + 1;
    const grid = document.createElement("div");
    grid.classList.add("meter__grid");
    grid.classList.add("meter__grid--minute");
    if (second % 10 == 0) {
      grid.classList.add("meter__grid--light");
    }
    grid.style.transform = `rotate(${second * 3}deg)`;
    minuteFrame.append(grid);
  }

  for (let i = 0; i < 120; i++) {
    const second = i + 1;
    const grid = document.createElement("div");
    grid.classList.add("meter__grid");
    grid.classList.add("meter__grid--hour");
    if (second % 10 == 0) {
      grid.classList.add("meter__grid--light");
    }
    grid.style.transform = `rotate(${second * 3}deg)`;
    hourFrame.append(grid);
  }

  // Create clock dials
  const hourDial = document.createElement("div");
  hourDial.classList.add("meter__dial--hour");
  hourDial.classList.add("meter__dial");
  const minuteDial = document.createElement("div");
  minuteDial.classList.add("meter__dial--minute");
  minuteDial.classList.add("meter__dial");
  const secondDial = document.createElement("div");
  secondDial.classList.add("meter__dial--second");
  secondDial.classList.add("meter__dial");

  secondFrame.append(secondDial);
  secondFrame.append(minuteFrame);
  minuteFrame.append(minuteDial);
  minuteFrame.append(hourFrame);
  hourFrame.append(hourDial);
  hourFrame.append(digitalFrame);

  // Create digital clock
  const digital = document.createElement("div");
  digital.classList.add("meter__digital");
  digitalFrame.append(digital);

  const digitalHour = document.createElement("div");
  digitalHour.classList.add("meter__digital__hour");
  digital.append(digitalHour);

  const digitalSecond = document.createElement("div");
  digitalSecond.classList.add("meter__digital__second");
  digital.append(digitalSecond);

  const digitalMinute = document.createElement("div");
  digitalMinute.classList.add("meter__digital__minute");
  digital.append(digitalMinute);

  const digitalDate = document.createElement("div");
  digitalDate.classList.add("meter__digital__date");
  digital.append(digitalDate);

  // Create glass
  const glass = document.createElement("div");
  glass.classList.add("meter__glass");
  clock.append(glass);
};

const start = (time) => {
  // Get clock dials degree
  const smoothSecondDialDegree = getSmoothSecondDialDegree(time);
  const minuteDialDegree = getMinuteDialDegree(time);
  const hourDialDegree = getHourDialDegree(time);

  // Get clock content
  const hour = padZeros(time.hour);
  const minute = padZeros(time.minute);
  const second = padZeros(time.second);
  const date = padZeros(time.date);
  const month = getMonthShort(time.month).toUpperCase();
  const year = time.year;

  // Set clock dials degree
  document.querySelector(
    ".meter__dial--second"
  ).style.transform = `rotate(${smoothSecondDialDegree}deg)`;
  document.querySelector(
    ".meter__dial--minute"
  ).style.transform = `rotate(${minuteDialDegree}deg)`;
  document.querySelector(
    ".meter__dial--hour"
  ).style.transform = `rotate(${hourDialDegree}deg)`;

  // Set clock content
  document.querySelector(".meter__digital__hour").innerHTML = `${hour}`;
  document.querySelector(".meter__digital__minute").innerHTML = `${minute}`;
  document.querySelector(".meter__digital__second").innerHTML = `${second}`;
  document.querySelector(
    ".meter__digital__date"
  ).innerHTML = `${date} ${month} ${year}`;
};

export { render, start };
