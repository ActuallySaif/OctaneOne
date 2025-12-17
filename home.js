let heroCar = document.getElementById("heroCar3d");

setTimeout(() => {
    heroCar.cameraOrbit = '90.09deg 88.83deg 0.0915m';
  }, 3000);

let porsche = document.getElementById("porsche3d");
let bg1 = document.getElementById("scBg1");
let bg2 = document.getElementById("scBg2");

porsche.addEventListener("mouseenter", () => {
  porsche.cameraOrbit = '90deg 86.97deg 8.79m';
  bg1.style.right = '-300px'
  bg2.style.transform = 'rotate(-40deg)'
})

porsche.addEventListener("mouseleave", () => {
  porsche.cameraOrbit = '40.11deg 86.97deg 8.79m'
  bg1.style.right = '0px'
  bg2.style.transform = 'rotate(0deg)'
})

