let heroCar = document.getElementById("heroCar3d");

setTimeout(() => {
    heroCar.cameraOrbit = '90.09deg 88.83deg 0.0915m';
  }, 3000);

let porsche = document.getElementById("porsche3d");

porsche.addEventListener("mouseenter", () => {
  porsche.cameraOrbit = '90deg 86.97deg 8.79m';
})

porsche.addEventListener("mouseleave", () => {
  porsche.cameraOrbit = '40.11deg 86.97deg 8.79m'
})

