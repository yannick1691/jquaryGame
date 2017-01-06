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
    i = i + 15;
    backgroundForward = i - (i * 2.1);
    backgroundBackward = backgroundForward;
  } else if(e.keyCode === 37 && position <= -20) {
//    character.style.left = `${i}px`;
    character.style.transform = `rotate(${i}deg)`;
    scene.style.backgroundPosition = `${backgroundBackward}px`;
    grass.style.backgroundPosition = `${backgroundBackward}px`;
    i = i - 15;
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
//  Tree code
// -------------------------
  
// -------------------------
//  Portfolio Item 1 code
// -------------------------
  
if(position>= -1200 && position <= -760 && PoIt1Ran === true) {
  $('.portfolio-item1').stop().animate({height: '0px', width: '0px', padding: '0px'}, 220);
  PoIt1Ran = false;
} else if(position <= -1214 && position >= -1400 && PoIt1Ran === false) {
  $('.portfolio-item1').stop().animate({height: '500px', width: '1200px', padding: '15px'}, 420);
  PoIt1Ran = true;
} else if(position <= -1650 && position >= -1700 && PoIt1Ran === true) {
  $('.portfolio-item1').stop().animate({height: '0px', width: '0px', padding: '0px'}, 220);
  PoIt1Ran = false;
}

// -------------------------
//  Portfolio Item 2 code
// -------------------------

if(position>= -1990 && position <= -1715 && PoIt2Ran === true) {
//  $('.portfolio-item2').stop().slideUp(100);
  $('h2[data-info="vaardigheden"]').stop().animate({top: '-300px'}, 160);
  $('img[data-info="css3"]').stop().animate({top: '800px'}, 170);
  $('img[data-info="html5"]').stop().animate({top: '800px'}, 170);
  $('img[data-info="js"]').stop().animate({top: '800px'}, 170);
  PoIt2Ran = false;
} else if(position <= -2000 && position >= -2700 && PoIt2Ran === false) {
//  $('.portfolio-item2').stop().slideDown(200);
  $('h2[data-info="vaardigheden"]').stop().animate({top: '-50px'}, 170);
  $('img[data-info="css3"]').stop().animate({top: '120px'}, 190, 'swing');
  $('img[data-info="html5"]').stop().animate({top: '120px'}, 190, 'swing');
  $('img[data-info="js"]').stop().animate({top: '120px'}, 190, 'swing');
  PoIt2Ran = true
} else if(position <= -2900 && position >= -3050 && PoIt2Ran === true) {
//  $('.portfolio-item2').stop().slideUp(100);
  $('h2[data-info="vaardigheden"]').stop().animate({top: '-300px'}, 160);
  $('img[data-info="css3"]').stop().animate({top: '800px'}, 170);
  $('img[data-info="html5"]').stop().animate({top: '800px'}, 170);
  $('img[data-info="js"]').stop().animate({top: '800px'}, 170);
  PoIt2Ran = false;
}
  
// -------------------------
//  Portfolio Item 3 code
// -------------------------
if(position >= -3490 && position <= - 3100) {
  $('h2[data-info="timeSpent"]').stop().animate({'margin-top': '-800px'}, 160);
  $('p[data-info="html-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},200);
  $('p[data-info="css-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},200);
  $('p[data-info="js-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},200);
} else if(position <= -3500 && position >= -4000) {
  $('h2[data-info="timeSpent"]').stop().animate({'margin-top': '170px'}, 380);
  $('p[data-info="html-hours"]').stop().animate({opacity: '1', 'font-size': '45px'},290);
  $('p[data-info="css-hours"]').stop().animate({opacity: '1', 'font-size': '45px'},290);
  $('p[data-info="js-hours"]').stop().animate({opacity: '1', 'font-size': '45px'},290);
} else if(position <= -4200 && position >= -4250) {
  $('h2[data-info="timeSpent"]').stop().animate({'margin-top': '-800px'}, 160);
  $('p[data-info="html-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},200);
  $('p[data-info="css-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},200);
  $('p[data-info="js-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},200);
}
  
// -------------------------
//  Portfolio Item 4 code
// -------------------------
if(position >= -4490 && position <= -4290){
  $('img[data-info="es6-l"]').stop().animate({bottom: '-300px'},200);
  $('img[data-info="jquary-l"]').stop().animate({right: '1400px'},200);
  $('img[data-info="less-l"]').stop().animate({left: '1400px'},200);
} else if(position <= -4500 && position >= -5000){
  $('img[data-info="es6-l"]').stop().animate({bottom: '80px'},450);
  $('img[data-info="jquary-l"]').stop().animate({right: '50px'},450);
  $('img[data-info="less-l"]').stop().animate({left: '50px'},450);
} else if(position <= -5200 && position >= -5250){
  $('img[data-info="es6-l"]').stop().animate({bottom: '-300px'},200);
  $('img[data-info="jquary-l"]').stop().animate({right: '1400px'},200);
  $('img[data-info="less-l"]').stop().animate({left: '1400px'},200);
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