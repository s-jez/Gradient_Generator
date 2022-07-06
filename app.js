const COLOR = document.querySelectorAll(".color");

const changeBackgroundColor = (colorOne, colorTwo) => {
  document.body.style.backgroundImage =
    "linear-gradient(to right, " + colorOne + ", " + colorTwo + ")";
};
const generateGradient = () => {
  let colorOne = document.getElementById("color-1").value;
  let colorTwo = document.getElementById("color-2").value;
  changeBackgroundColor(colorOne, colorTwo);
};
COLOR.forEach((item) => {
  item.addEventListener("change", generateGradient);
});
