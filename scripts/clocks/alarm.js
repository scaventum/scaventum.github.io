const render = () => {
  // Get main clock component
  const clock = document.querySelector("#alarm");

  // Create clock frame
  const frame = document.createElement("div");
  frame.className = "alarm__frame";
  clock.append(frame);
};

const start = (time) => {};

export { render, start };
