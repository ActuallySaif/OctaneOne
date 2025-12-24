let porsche = document.getElementById("porsche3d");
let bg1 = document.getElementById("scBg1");
let bg2 = document.getElementById("scBg2");
let carText = document.getElementById("carText");
let carStats = document.getElementById("sCarStats");

porsche.addEventListener("mouseenter", () => {
  porsche.cameraOrbit = '90deg 86.97deg 8.79m';
  bg1.style.right = '-300px'
  bg2.style.transform = 'rotate(-40deg)'
  carText.style.transform = 'translateY(0)';
  carStats.style.opacity = '1';
})

porsche.addEventListener("mouseleave", () => {
  porsche.cameraOrbit = '40.11deg 86.97deg 8.79m'
  bg1.style.right = '0px'
  bg2.style.transform = 'rotate(0deg)'
  carText.style.transform = 'translateY(200px)';
  carStats.style.opacity = '0';
})