import {
  getSmoothSecondDialDegree,
  getMinuteDialDegree,
  getHourDialDegree,
} from "../utilities/dials.js";

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
};

const start = (time) => {
  // Get clock dials degree
  const smoothSecondDialDegree = getSmoothSecondDialDegree(time);
  const minuteDialDegree = getMinuteDialDegree(time);
  const hourDialDegree = getHourDialDegree(time);

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
};

export { render, start };
