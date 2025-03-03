import {
  render as analogueRender,
  start as analogueStart,
} from "./clocks/analogue.js";
import { render as meterRender, start as meterStart } from "./clocks/meter.js";
import { render as alarmRender, start as alarmStart } from "./clocks/alarm.js";

export const render = () => {
  analogueRender();
  meterRender();
  alarmRender();
};

export const startTime = () => {
  const time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth();
  let date = time.getDate();
  let day = time.getDay();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let millisecond = time.getMilliseconds();

  let timeObject = {
    year,
    month,
    date,
    day,
    hour,
    minute,
    second,
    millisecond,
  };

  analogueStart(timeObject);
  meterStart(timeObject);
  alarmStart(timeObject);

  setTimeout(startTime, 10);
};

render();
startTime();
