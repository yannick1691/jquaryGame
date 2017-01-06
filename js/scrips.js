$(document).ready(function(){
});

// ----------------------------
//     character Movement
// ----------------------------
function walk(e){
  let position = parseInt(scene.style.backgroundPositionX);
  if(e.keyCode === 39){ // Code Om naar Rechts te gaan
    character.src = "links/character/moving@2x.png";
    character.style.transform = 'rotate(0deg)';
    scene.style.backgroundPosition = `${backgroundForward}px`;
    i = i + 15;
    backgroundForward = i - (i * 2.1);
    backgroundBackward = backgroundForward;
  } else if(e.keyCode === 37 && position <= -20) {  // Code Om Naar Links Te Gaan
    character.src = "links/character/moving@2x.png";
    character.style.transform = 'rotate(180deg)';
    scene.style.backgroundPosition = `${backgroundBackward}px`;
    i = i - 15;
    backgroundBackward = i - (i * 2);
    backgroundForward = backgroundBackward;
  } else if(e.keyCode === 38 && characterHeight >= 591 && maxHeight === false){  // Code Die Kijkt of je Max height heb bereikt
    character.src = "links/character/moving@2x.png";
    character.style.transform = 'rotate(-90deg)';
    maxHeight = true;
    $('#character').animate({bottom: '601px'},450);
    $('#character').animate({bottom: '591px'},450);
    noAcces.currentTime = 0;
    noAcces.play();
    setTimeout(function(){
      maxHeight = false;
      characterHeight = parseInt(character.style.bottom);
    }, 1050);
  } else if(e.keyCode === 40 && characterHeight <= 20 && minHeight === false){  // Code Die Kijkt Of Je Niet MinHeight Heb bereikt
    character.src = "links/character/moving@2x.png";
    character.style.transform = 'rotate(90deg)';
    minHeight = true;
    $('#character').animate({bottom: '4px'},450);
    $('#character').animate({bottom: '20px'},450);
    noAcces.currentTime = 0;
    noAcces.play();
    setTimeout(function(){
      minHeight = false;
      characterHeight = parseInt(character.style.bottom);
    }, 1050);
  } else if(e.keyCode === 38 && characterHeight <= 590){  // Code Om Omhoog te gaan
    character.src = "links/character/moving@2x.png";
    f = f + 20;
    character.style.transform = 'rotate(-90deg)';
    character.style.bottom = `${f}px`;
    characterHeight = parseInt(character.style.bottom);
  } else if(e.keyCode === 40 && characterHeight >=21){  // Code Om Omlaag te gaan
    character.src = "links/character/moving@2x.png";
    f = f - 20;
    character.style.transform = 'rotate(90deg)';
    character.style.bottom = `${f}px`;
    characterHeight = parseInt(character.style.bottom);
  }
  
  if(position <= -200){
    $('.guide').fadeOut('slow');
  }
  
// -------------------------
//  Portfolio Item 1 code
// -------------------------
  
if(position>= -1200 && position <= -760 && PoIt1Ran === true) {
  $('.portfolio-item1').stop().animate({width: '0px', padding: '0px'}, 320);
  PoIt1Ran = false;
} else if(position <= -1214 && position >= -1400 && PoIt1Ran === false) {
  $('.portfolio-item1').stop().animate({width: '1200px', padding: '15px'}, 620);
  PoIt1Ran = true;
} else if(position <= -1650 && position >= -1700 && PoIt1Ran === true) {
  $('.portfolio-item1').stop().animate({width: '0px', padding: '0px'}, 320);
  PoIt1Ran = false;
}

// -------------------------
//  Portfolio Item 2 code
// -------------------------

if(position>= -1990 && position <= -1715 && PoIt2Ran === true) {
//  $('.portfolio-item2').stop().slideUp(100);
  $('h2[data-info="vaardigheden"]').stop().animate({top: '-290px'}, 360);
  $('img[data-info="css3"]').stop().animate({top: '800px'}, 370);
  $('img[data-info="html5"]').stop().animate({top: '800px'}, 370);
  $('img[data-info="js"]').stop().animate({top: '800px'}, 370);
  PoIt2Ran = false;
} else if(position <= -2000 && position >= -2500 && PoIt2Ran === false) {
//  $('.portfolio-item2').stop().slideDown(200);
  $('h2[data-info="vaardigheden"]').stop().animate({top: '-50px'}, 670);
  $('img[data-info="css3"]').stop().animate({top: '120px'}, 690, 'swing');
  $('img[data-info="html5"]').stop().animate({top: '120px'}, 690, 'swing');
  $('img[data-info="js"]').stop().animate({top: '120px'}, 690, 'swing');
  PoIt2Ran = true
} else if(position <= -2700 && position >= -2850 && PoIt2Ran === true) {
//  $('.portfolio-item2').stop().slideUp(100);
  $('h2[data-info="vaardigheden"]').stop().animate({top: '-290px'}, 360);
  $('img[data-info="css3"]').stop().animate({top: '800px'}, 370);
  $('img[data-info="html5"]').stop().animate({top: '800px'}, 370);
  $('img[data-info="js"]').stop().animate({top: '800px'}, 370);
  PoIt2Ran = false;
}
  
// -------------------------
//  Portfolio Item 3 code
// -------------------------
if(position >= -3090 && position <= - 2900 && PoIt3Ran === true) {
  $('h2[data-info="timeSpent"]').stop().animate({'margin-top': '-100px'}, 360);
  $('p[data-info="html-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},300);
  $('p[data-info="css-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},300);
  $('p[data-info="js-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},300);
  PoIt3Ran = false;
} else if(position <= -3100 && position >= -3400 && PoIt3Ran === false) {
  $('h2[data-info="timeSpent"]').stop().animate({'margin-top': '170px'}, 880);
  $('p[data-info="html-hours"]').stop().animate({opacity: '1', 'font-size': '45px'},890);
  $('p[data-info="css-hours"]').stop().animate({opacity: '1', 'font-size': '45px'},890);
  $('p[data-info="js-hours"]').stop().animate({opacity: '1', 'font-size': '45px'},890);
  PoIt3Ran = true;
} else if(position <= -3650 && position >= -3750 && PoIt3Ran === true) {
  $('h2[data-info="timeSpent"]').stop().animate({'margin-top': '-100px'}, 360);
  $('p[data-info="html-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},300);
  $('p[data-info="css-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},300);
  $('p[data-info="js-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},300);
  PoIt3Ran = false;
}
  
// -------------------------
//  Portfolio Item 4 code
// -------------------------
if(position >= -3934 && position <= -3820 && PoIt4Ran === true){
  $('h2[data-info="watImLearning"]').stop().animate({'margin-top': '-170px'},360)
  $('img[data-info="es6-l"]').stop().animate({bottom: '-300px'},300);
  $('img[data-info="jquary-l"]').stop().animate({right: '1400px'},300);
  $('img[data-info="less-l"]').stop().animate({left: '1400px'},300);
  PoIt4Ran = false;
} else if(position <= -3950 && position >= -4250 && PoIt4Ran === false){
  $('h2[data-info="watImLearning"]').stop().animate({'margin-top': '170px'},360)
  $('img[data-info="es6-l"]').stop().animate({bottom: '80px'},600);
  $('img[data-info="jquary-l"]').stop().animate({right: '50px'},600);
  $('img[data-info="less-l"]').stop().animate({left: '50px'},600);
  PoIt4Ran = true;
} else if(position <= -4390 && position >= -4550 && PoIt4Ran === true){
  $('h2[data-info="watImLearning"]').stop().animate({'margin-top': '-170px'},360)
  $('img[data-info="es6-l"]').stop().animate({bottom: '-300px'},300);
  $('img[data-info="jquary-l"]').stop().animate({right: '1400px'},300);
  $('img[data-info="less-l"]').stop().animate({left: '1400px'},300);
  PoIt4Ran = false;
}

  
// -------------------------
//  Portfolio Item 5 code
// -------------------------
if(position >= -4760 && position <= -4600 && PoIt5Ran === true){
  $('h2[data-info="watIkWilLeren"]').stop().animate({'margin-top': '-170px'},360);
  node.stop().animate({top: '700px'},300);
  php.stop().animate({right: '1400px'},300);
  react.stop().animate({right: '1400px'},300);
  PoIt5Ran = false;
} else if(position <= -4775 && position >= -5100 && PoIt5Ran === false){
  $('h2[data-info="watIkWilLeren"]').stop().animate({'margin-top': '170px'},360);
  node.stop().animate({top: '-100px'},760);
  node.animate({top: '100px'},600);
  node.animate({top: '10px'},600);
  php.stop().animate({right: '30px'},360);
  react.stop().animate({right: '30px'},360);
  PoIt5Ran = true;
} else if(position <= -5200 && position >= -5400 && PoIt5Ran === true){
  $('h2[data-info="watIkWilLeren"]').stop().animate({'margin-top': '-170px'},360);
  node.stop().animate({top: '700px'},300);
  php.stop().animate({right: '1400px'},300);
  react.stop().animate({right: '1400px'},300);
  PoIt5Ran = false;
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

function characterReset(){
  character.src = "links/character/notMoving@2x.png";
}

container.addEventListener('keydown', walk);
container.addEventListener('keyup', characterReset);