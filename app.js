const COLOR = document.querySelectorAll(".color");
const INPUT_DEGREE = document.querySelector(".degree");
const BTN_COPY_GRADIENT = document.querySelector(".btn-copy");

let linearGradient;

const changeBackgroundColor = (colorOne, colorTwo) => {
  let gradientDegree = document.querySelector(".degree").value;
  linearGradient = `linear-gradient(${gradientDegree}deg, ${colorOne}, ${colorTwo})`;
  document.body.style.backgroundImage = linearGradient;
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
  navigator.clipboard.writeText("background: " + linearGradient + ";").then(
    () => {
      alert("Copying to clipboard was successfull");
    },
    (err) => {
      alert("Error: ", err);
    }
  );
});
