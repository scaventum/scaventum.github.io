import {
  render as analogRender,
  start as analogStart,
} from "./clocks/analog.js";
import { render as meterRender, start as meterStart } from "./clocks/meter.js";
import { start as waktuIndonesiaStart } from "./clocks/waktu-indonesia.js";

export const render = () => {
  analogRender();
  meterRender();
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

  analogStart(timeObject);
  meterStart(timeObject);
  waktuIndonesiaStart(timeObject);

  setTimeout(startTime, 10);
};

render();
startTime();
