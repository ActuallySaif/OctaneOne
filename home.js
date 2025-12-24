let heroCar = document.getElementById("heroCar3d");

setTimeout(() => {
    heroCar.cameraOrbit = '90.09deg 88.83deg 0.0915m';
  }, 3000);

let sliderProg = 0;

function carSliderRight(sliderTrackId) {
  let sliderTrack = document.getElementById(sliderTrackId);

  if (sliderProg > -200) {
    sliderProg -= 100
    sliderTrack.style.transform = `translateX(${sliderProg}vw)`
    console.log(sliderProg)
  } else{
    sliderTrack.style.transform = `translateX(0vw)`;
    sliderProg = 0
  }
}


function carSliderLeft(sliderTrackId) {
  let sliderTrack = document.getElementById(sliderTrackId);

  if (sliderProg < 0) {
    sliderProg += 100
    sliderTrack.style.transform = `translateX(${sliderProg}vw)`
    console.log(sliderProg)
  } else{
    sliderTrack.style.transform = `translateX(-200vw)`;
    sliderProg = -200
  }
}


carSliderLeft("sCarSlider");
carSliderRight("sCarSlider");

