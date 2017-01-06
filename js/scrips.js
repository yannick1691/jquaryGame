$(document).ready(function(){
});

// ----------------------------
//     character Movement
// ----------------------------

function walk(e){
  /*Move right*/
  let position = parseInt(scene.style.backgroundPositionX);
  if(e.keyCode === 39){
//    character.style.left = `${i}px`;
    character.style.transform = `rotate(${i}deg)`;
    scene.style.backgroundPosition = `${backgroundForward}px`;
    grass.style.backgroundPosition = `${backgroundForward}px`;
    i = i + 16;
    backgroundForward = i - (i * 2.1);
    backgroundBackward = backgroundForward;
  } else if(e.keyCode === 37 && position <= -20) {
//    character.style.left = `${i}px`;
    character.style.transform = `rotate(${i}deg)`;
    scene.style.backgroundPosition = `${backgroundBackward}px`;
    grass.style.backgroundPosition = `${backgroundBackward}px`;
    i = i - 16;
    backgroundBackward = i - (i * 2);
    backgroundForward = backgroundBackward;
  } else if(e.keyCode === 38){
    character.style.bottom = '205px';
    jumpSound.currentTime = 0;
    jumpSound.play();
    setTimeout(reset, 150);
//    $('.jumpi').removeClass('hidden').addClass('visible');
//    character.style.bottom = '10px';
  }
  
  console.info(position);
  
  if(position <= -200){
    $('.guide').fadeOut('slow');
  }
  
// -------------------------
//  Portfolio Item 1 code
// -------------------------
  
if(position>= -1200 && position <= -1100){
  $('.portfolio-item1').stop().animate({height: '0px', width: '0px', padding: '0px'}, 120);
} else if(position <= -1214 && position >= -1400){
  $('.portfolio-item1').stop().animate({height: '500px', width: '1200px', padding: '15px'}, 220);
} else if(position <= -1700){
  $('.portfolio-item1').stop().animate({height: '0px', width: '0px', padding: '0px'}, 120);
}

// -------------------------
//  Portfolio Item 2 code
// -------------------------

if(position>= -2000 && position <= -1900){
  $('.portfolio-item2').stop().slideUp(100);
} else if(position <= -2000 && position >= -2200){
  $('.portfolio-item2').stop().slideDown(200);
} else if(position <= -2600) {
  $('.portfolio-item2').stop().slideUp(100);
}
// --------------------------
//    Background Music
// --------------------------
  
if(e.keyCode === 32 && audioPlaying === false){
  backgroundMusic.play();
  musicSwitch.style.backgroundPosition = '0px';
  audioPlaying = true;
} else if(e.keyCode === 32 && audioPlaying === true){
  backgroundMusic.pause();
  musicSwitch.style.backgroundPosition = '-65px';
  audioPlaying = false;
}
}
function test(e){
  console.log(e.keyCode);
}

function reset(){
  character.style.bottom = '30px';
  $('.jumpi').fadeOut(1000);
}

function backgroundMusicSwitch(){
  if(audioPlaying === false){
  backgroundMusic.play();
  musicSwitch.style.backgroundPosition = '0px';
  audioPlaying = true;
} else if(audioPlaying === true){
  backgroundMusic.pause();
  musicSwitch.style.backgroundPosition = '-65px';
  audioPlaying = false;
}
}

container.addEventListener('keydown', walk);