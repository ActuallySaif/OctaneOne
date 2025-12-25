let bg1 = document.getElementById("scBg1");
let bg2 = document.getElementById("scBg2");
let porsche = document.getElementById("porsche3d");
let bmw = document.getElementById('i83d');
let amg = document.getElementById('amg3d');
let bentley = document.getElementById('bentely3d');
let rolls = document.getElementById('rolls3d');
let range = document.getElementById('range3d');
let charger = document.getElementById('charger3d');
let mustang = document.getElementById('mustang3d');
let camaro = document.getElementById('camaro3d');

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
addCarHover(bentley, "carText4", "sCarStats4");
addCarHover(range, "carText5", "sCarStats5");
addCarHover(rolls, "carText6", "sCarStats6");
addCarHover(charger, "carText6", "sCarStats6");
addCarHover(mustang, "carText6", "sCarStats6");
addCarHover(camaro, "carText6", "sCarStats6");

