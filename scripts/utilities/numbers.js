const padZeros = (number, zerosAmount = 2) => {
  return number.toString().padStart(zerosAmount, "0");
};

export { padZeros };
