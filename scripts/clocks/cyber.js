import {
  getHourDialDegree,
  getMinuteDialDegree,
  getSmoothSecondDialDegree,
} from "../utilities/dials.js";

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
};

const start = (time) => {
  // Get clock dials degree
  const smoothSecondDialDegree = getSmoothSecondDialDegree(time) + 5;
  const minuteDialDegree = getMinuteDialDegree(time) + 5;
  const hourDialDegree = getHourDialDegree(time) + 5;

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
};

export { render, start };
