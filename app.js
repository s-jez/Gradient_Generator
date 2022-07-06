const COLOR = document.querySelectorAll(".color");

const colorToHex = (c) => {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};
const rgbToHex = (r, g, b) => {
  return "#" + colorToHex(r) + colorToHex(g) + colorToHex(b);
};

const printColor = (ev) => {
  const color = ev.target.value;
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);
  console.log(rgbToHex(r, g, b));
};
COLOR.forEach((item) => {
  item.addEventListener("change", printColor);
});
