import {
  render as analogRender,
  start as analogStart,
} from "./clocks/analog.js";
import { start as startWaktuIndonesia } from "./clocks/waktu-indonesia.js";

export const render = () => {
  analogRender();
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
  startWaktuIndonesia(timeObject);

  setTimeout(startTime, 10);
};

render();
startTime();
