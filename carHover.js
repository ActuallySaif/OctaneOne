let bg1 = document.getElementById("scBg1");
let bg2 = document.getElementById("scBg2");
let porsche = document.getElementById("porsche3d");
let bmw = document.getElementById('i83d');
let amg = document.getElementById('amg3d');

function addCarHover(model, textId, statsId) {
  const carText = document.getElementById(textId);
  const carStats = document.getElementById(statsId);

  model.addEventListener("mouseenter", () => {
    model.cameraOrbit = '90deg 86.97deg 8.79m';
    bg1.style.right = '-300px';
    bg2.style.transform = 'rotate(-40deg)';
    carText.style.transform = 'translateY(0)';
    carStats.style.opacity = '1';
  });

  model.addEventListener("mouseleave", () => {
    model.cameraOrbit = '40.11deg 86.97deg 8.79m';
    bg1.style.right = '0px';
    bg2.style.transform = 'rotate(0deg)';
    carText.style.transform = 'translateY(200px)';
    carStats.style.opacity = '0';
  });
}

addCarHover(porsche, "carText1", "sCarStats1");
addCarHover(bmw, "carText2", "sCarStats2");
addCarHover(amg, "carText3", "sCarStats3");