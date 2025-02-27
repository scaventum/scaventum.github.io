import { padZeros } from "../utilities/numbers.js";
import { getDayId, getMonthIdShort } from "../utilities/strings.js";

const start = (time) => {
  let dayId = getDayId(time.day);
  let monthIdShort = getMonthIdShort(time.month);
  let paddedZerosMinute = padZeros(time.minute);
  let paddedZerosSecond = padZeros(time.second);
  let paddedZerosMillisecond = padZeros(time.millisecond, 3);

  document.getElementById("waktu-indonesia").innerHTML =
    dayId +
    ", " +
    time.date +
    " " +
    monthIdShort +
    " " +
    time.year +
    ", " +
    time.hour +
    ":" +
    paddedZerosMinute +
    ":" +
    paddedZerosSecond +
    ":" +
    paddedZerosMillisecond;
};

export { start };
