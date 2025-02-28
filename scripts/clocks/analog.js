import {
  getSmoothSecondDialDegree,
  getMinuteDialDegree,
  getHourDialDegree,
} from "../utilities/dials.js";

const render = () => {
  // Get main clock component
  const clock = document.querySelector("#analog");

  // Create clock frame
  const frame = document.createElement("div");
  frame.className = "analog__frame";
  clock.append(frame);

  // Create clock title
  const title = document.createElement("div");
  title.innerHTML = "ANALOG";
  title.className = "analog__title";
  frame.append(title);

  // Create clock meters
  for (let i = 0; i < 60; i++) {
    const meter = document.createElement("div");
    meter.classList.add("analog__meter");
    if (i % 5 == 0) {
      meter.classList.add("analog__meter--hour");
    }
    meter.style.transform = `rotate(${i * 6}deg)`;
    frame.append(meter);
  }

  // Create clock dials
  const hourDial = document.createElement("div");
  hourDial.classList.add("analog__dial--hour");
  hourDial.classList.add("analog__dial");
  const minuteDial = document.createElement("div");
  minuteDial.classList.add("analog__dial--minute");
  minuteDial.classList.add("analog__dial");
  const secondDial = document.createElement("div");
  secondDial.classList.add("analog__dial--second");
  secondDial.classList.add("analog__dial");
  const hourMinuteAxis = document.createElement("div");
  hourMinuteAxis.classList.add("analog__axis");
  hourMinuteAxis.classList.add("analog__axis--hour-minute");
  const secondAxis = document.createElement("div");
  secondAxis.classList.add("analog__axis");
  secondAxis.classList.add("analog__axis--second");

  frame.append(hourDial);
  frame.append(minuteDial);
  frame.append(hourMinuteAxis);
  frame.append(secondDial);
  frame.append(secondAxis);

  // Create clock hours
  for (let i = 0; i < 12; i++) {
    const hour = i + 1;
    const number = document.createElement("span");
    number.innerHTML = hour;
    number.style.transform = `rotate(-${hour * 30}deg)`;
    const numberPosition = document.createElement("div");
    numberPosition.style.transform = `rotate(${hour * 30}deg)`;
    numberPosition.append(number);
    numberPosition.classList.add("analog__number");
    numberPosition.classList.add(`analog__number--${hour}`);
    if (hour % 3 == 0) {
      numberPosition.classList.add(`analog__number--large`);
    }
    frame.append(numberPosition);
  }
};

const start = (time) => {
  // Get clock dials degree
  const smoothSecondDialDegree = getSmoothSecondDialDegree(time);
  const minuteDialDegree = getMinuteDialDegree(time);
  const hourDialDegree = getHourDialDegree(time);

  // Set clock dials degree
  document.querySelector(
    ".analog__dial--second"
  ).style.transform = `rotate(${smoothSecondDialDegree}deg)`;
  document.querySelector(
    ".analog__dial--minute"
  ).style.transform = `rotate(${minuteDialDegree}deg)`;
  document.querySelector(
    ".analog__dial--hour"
  ).style.transform = `rotate(${hourDialDegree}deg)`;
};

export { render, start };
