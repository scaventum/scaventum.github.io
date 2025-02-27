const getSmoothSecondDialDegree = (time) => {
  return ((time.second * 1000 + time.millisecond) * 360) / 60000;
};

const getMinuteDialDegree = (time) => {
  return ((time.minute * 60 + time.second) * 360) / 3600;
};

const getHourDialDegree = (time) => {
  return (((time.hour % 720) * 60 + time.minute) * 360) / 720;
};

export { getSmoothSecondDialDegree, getMinuteDialDegree, getHourDialDegree };
