import {
  getHourDialDegree,
  getMinuteDialDegree,
  getSmoothSecondDialDegree,
} from "../utilities/dials.js";
import { padZeros } from "../utilities/numbers.js";
import { getDay, getMonth } from "../utilities/strings.js";

const render = () => {
  // Get main clock component
  const clock = document.querySelector("#cyber");

  // Create clock frame
  const frame = document.createElement("div");
  frame.className = "cyber__frame";
  clock.append(frame);

  // Create hour arc
  const hourArc = document.createElement("div");
  hourArc.classList.add("cyber__arc");
  hourArc.classList.add("cyber__arc--hour");
  frame.append(hourArc);

  // Create hour arc
  const minuteArc = document.createElement("div");
  minuteArc.classList.add("cyber__arc");
  minuteArc.classList.add("cyber__arc--minute");
  frame.append(minuteArc);

  // Create hour arc
  const secondArc = document.createElement("div");
  secondArc.classList.add("cyber__arc");
  secondArc.classList.add("cyber__arc--second");
  frame.append(secondArc);

  // Create digital
  const digital = document.createElement("div");
  digital.classList.add("cyber__digital");
  frame.append(digital);

  // Create digital day
  const digitalDay = document.createElement("div");
  digitalDay.classList.add("cyber__digital__day");
  digital.append(digitalDay);

  // Create digital time
  const digitalTime = document.createElement("div");
  digitalTime.classList.add("cyber__digital__time");
  digital.append(digitalTime);

  // Create digital time
  const digitalDate = document.createElement("div");
  digitalDate.classList.add("cyber__digital__date");
  digital.append(digitalDate);
};

const start = (time) => {
  // Get clock dials degree
  const smoothSecondDialDegree = getSmoothSecondDialDegree(time) + 5;
  const minuteDialDegree = getMinuteDialDegree(time) + 5;
  const hourDialDegree = getHourDialDegree(time) + 5;

  // Get clock content
  const hour = time.hour;
  const minute = padZeros(time.minute);
  const day = getDay(time.day);
  const date = time.date;
  const month = getMonth(time.month);
  const year = time.year;

  // Set clock dials degree
  document.querySelector(
    ".cyber__arc--hour"
  ).style.transform = `rotate(${hourDialDegree}deg)`;
  document.querySelector(
    ".cyber__arc--minute"
  ).style.transform = `rotate(${minuteDialDegree}deg)`;
  document.querySelector(
    ".cyber__arc--second"
  ).style.transform = `rotate(${smoothSecondDialDegree}deg)`;

  // Set clock digital content
  document.querySelector(".cyber__digital__day").innerHTML = `${day}`;
  document.querySelector(
    ".cyber__digital__time"
  ).innerHTML = `${hour}:${minute}`;
  document.querySelector(
    ".cyber__digital__date"
  ).innerHTML = `${date} ${month} ${year}`;
};

export { render, start };
