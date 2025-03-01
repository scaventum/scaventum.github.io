import {
  getSmoothSecondDialDegree,
  getMinuteDialDegree,
  getHourDialDegree,
} from "../utilities/dials.js";

const render = () => {
  // Get main clock component
  const clock = document.querySelector("#analogue");

  // Create clock frame
  const frame = document.createElement("div");
  frame.className = "analogue__frame";
  clock.append(frame);

  // Create clock title
  const title = document.createElement("div");
  title.innerHTML = "ANALOGUE";
  title.className = "analogue__title";
  frame.append(title);

  // Create clock meters
  for (let i = 0; i < 60; i++) {
    const meter = document.createElement("div");
    meter.classList.add("analogue__meter");
    if (i % 5 == 0) {
      meter.classList.add("analogue__meter--hour");
    }
    meter.style.transform = `rotate(${i * 6}deg)`;
    frame.append(meter);
  }

  // Create clock dials
  const hourDial = document.createElement("div");
  hourDial.classList.add("analogue__dial--hour");
  hourDial.classList.add("analogue__dial");
  const minuteDial = document.createElement("div");
  minuteDial.classList.add("analogue__dial--minute");
  minuteDial.classList.add("analogue__dial");
  const secondDial = document.createElement("div");
  secondDial.classList.add("analogue__dial--second");
  secondDial.classList.add("analogue__dial");
  const hourMinuteAxis = document.createElement("div");
  hourMinuteAxis.classList.add("analogue__axis");
  hourMinuteAxis.classList.add("analogue__axis--hour-minute");
  const secondAxis = document.createElement("div");
  secondAxis.classList.add("analogue__axis");
  secondAxis.classList.add("analogue__axis--second");

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
    numberPosition.classList.add("analogue__number");
    numberPosition.classList.add(`analogue__number--${hour}`);
    if (hour % 3 == 0) {
      numberPosition.classList.add(`analogue__number--large`);
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
    ".analogue__dial--second"
  ).style.transform = `rotate(${smoothSecondDialDegree}deg)`;
  document.querySelector(
    ".analogue__dial--minute"
  ).style.transform = `rotate(${minuteDialDegree}deg)`;
  document.querySelector(
    ".analogue__dial--hour"
  ).style.transform = `rotate(${hourDialDegree}deg)`;
};

export { render, start };
