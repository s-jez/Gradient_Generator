const COLOR = document.querySelectorAll(".color");
const INPUT_DEGREE = document.querySelector(".degree");
const BTN_COPY_GRADIENT = document.querySelector(".btn-copy");
const BTN_CLEAR = document.querySelector(".btn-clear");
const GRADIENT_BLOCK = document.querySelector(".gradient-block");
const GRADIENT_COPY = document.querySelector(".gradient-copy");

let linearGradient;

const changeBackgroundColor = (colorOne, colorTwo) => {
  let gradientDegree = document.querySelector(".degree").value;
  linearGradient = `linear-gradient(${gradientDegree}deg, ${colorOne}, ${colorTwo})`;
  GRADIENT_BLOCK.style.backgroundImage = linearGradient;
};
const generateGradient = () => {
  let colorOne = document.getElementById("color-1").value;
  let colorTwo = document.getElementById("color-2").value;
  changeBackgroundColor(colorOne, colorTwo);
};
COLOR.forEach((item) => {
  item.addEventListener("input", generateGradient);
});
INPUT_DEGREE.addEventListener("input", generateGradient);
BTN_COPY_GRADIENT.addEventListener("click", () => {
  if (linearGradient !== "undefined") {
    let gradientEl = "background: " + linearGradient + ";";
    GRADIENT_COPY.innerHTML = gradientEl;
    GRADIENT_COPY.classList.add("alert", "alert-primary");
    navigator.clipboard.writeText(gradientEl).then(
      () => {
        alert("Copying to clipboard was successfull");
      },
      (err) => {
        alert("Error: ", err);
      }
    );
  }
});
BTN_CLEAR.addEventListener("click", () => {
  // clear variables
  linearGradient = "";
  document.getElementById("color-1").value = "";
  document.getElementById("color-2").value = "";
  document.querySelector(".degree").value = "";
  GRADIENT_COPY.innerHTML = "";
  GRADIENT_BLOCK.style.background = "white";
  GRADIENT_COPY.classList.remove("alert", "alert-primary");
});
