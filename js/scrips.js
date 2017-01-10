$(document).ready(function(){
});

// ----------------------------
//     character Movement
// ----------------------------
function walk(e){ // Everything in this function is triggered when event keydown fires. 
  let position = parseInt(scene.style.backgroundPositionX); // set the variable position to the value of scene background position.
  if(e.keyCode === 39){ // Code Om naar Rechts te gaan
    character.src = "links/character/moving@2x.png"; 
    character.style.transform = 'rotate(0deg)';
    scene.style.backgroundPosition = `${i}px`;
    i = i - 20; 
  } else if(e.keyCode === 37 && position <= -20) {  // Code Om Naar Links Te Gaan
    character.src = "links/character/moving@2x.png";
    character.style.transform = 'rotate(180deg)';
    scene.style.backgroundPosition = `${i}px`;
    i = i + 20;
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
  
  if(position <= -200){ // makes the guide fade out when the background position is <= -200
    $('.guide').fadeOut('slow');
  }
  
// -------------------------
//  Portfolio Item 1 code
// -------------------------
  
if(position>= -1200 && position <= -760 && PoIt1Ran === true) { // Fade out portfolio1
  $('.portfolio-item1').stop().animate({width: '0px', padding: '0px'}, 320);
  PoIt1Ran = false;
} else if(position <= -1214 && position >= -1400 && PoIt1Ran === false) { // fade in portfolio1
  $('.portfolio-item1').stop().animate({width: '1200px', padding: '15px'}, 620);
  $(".introductieText").typed({
        strings: ["Hallo, Ik ben yannick!", "Ik Volg de opleiding Mediavormgeving in de richting interactief op het MediaCollege Amsterdam.", "Deze hele basis simpele 'game' is gemaakt met javascript met de Jquary library", "Je kan het process vinden op de github project pagina door op de knop rechts bovenin te drukken", "~Yannick Frisart MV2C", "────────────────────────────────────<br>──────────▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄──────────<br>────────▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄────────<br>──────▐▌▒████▒▒▒▒▒▒▒▒████▒▒▐▌──────<br>──────▐▌▒▒████▒▒▒▒▒▒▒▒████▒▒▐▌──────<br>▐▌▀▄──▐▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐▌──▄▀▐▌<br>▐▌▒▒▀▄▐▌▒▒▐▌▀▄▄▀▀▄▄▀▀▄▄▀▐▌▒▒▐▌▄▀▒▒▐▌<br>▐▌▒▒▒▒▐▌▒▒▐▌▒▒▒▒▒▒▒▒▒▒▒▒▐▌▒▒▐▌▒▒▒▒▐▌<br>──▀▄▒▒▐▌▒▒▐▌▒▒▒▒▒▒▒▒▒▒▒▒▐▌▒▒▐▌▒▒▄▀──<br>────▀▄▐▌▒▒▐▌▒▒▒▒▒▒▒▒▒▒▒▒▐▌▒▒▐▌▄▀────<br>──────▐▌▒▒▐▌▄▀▀▄▄▀▀▄▄▀▀▄▐▌▒▒▐▌──────<br>──────▐▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐▌──────<br>──────▐▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐▌──────<br>Yannick's Macbook Pro: yannick$ git push"],
        typeSpeed: 0,
        backDelay: 2200,
        contentType: 'html'
  });
  PoIt1Ran = true;
} else if(position <= -1650 && position >= -1700 && PoIt1Ran === true) { // fade out portfolio1
  $('.portfolio-item1').stop().animate({width: '0px', padding: '0px'}, 320);
  PoIt1Ran = false;
}

// -------------------------
//  Portfolio Item 2 code
// -------------------------

if(position>= -1990 && position <= -1715 && PoIt2Ran === true) { // fade out portfolio2
//  $('.portfolio-item2').stop().slideUp(100);
  $('h2[data-info="vaardigheden"]').stop().animate({top: '-290px'}, 360);
  $('img[data-info="css3"]').stop().animate({top: '800px'}, 370);
  $('img[data-info="html5"]').stop().animate({top: '800px'}, 370);
  $('img[data-info="js"]').stop().animate({top: '800px'}, 370);
  PoIt2Ran = false;
} else if(position <= -2000 && position >= -2500 && PoIt2Ran === false) { // fade in portfolio2
//  $('.portfolio-item2').stop().slideDown(200);
  $('h2[data-info="vaardigheden"]').stop().animate({top: '-50px'}, 670);
  $('img[data-info="css3"]').stop().animate({top: '120px'}, 690, 'swing');
  $('img[data-info="html5"]').stop().animate({top: '120px'}, 690, 'swing');
  $('img[data-info="js"]').stop().animate({top: '120px'}, 690, 'swing');
  PoIt2Ran = true
} else if(position <= -2700 && position >= -2850 && PoIt2Ran === true) { // fade out portfolio2
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
if(position >= -3090 && position <= - 2900 && PoIt3Ran === true) { // Fade out portfolio3
  $('h2[data-info="timeSpent"]').stop().animate({'margin-top': '-100px'}, 360);
  $('p[data-info="html-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},300);
  $('p[data-info="css-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},300);
  $('p[data-info="js-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},300);
  PoIt3Ran = false;
} else if(position <= -3100 && position >= -3400 && PoIt3Ran === false) { // fade in portfolio3
  $('h2[data-info="timeSpent"]').stop().animate({'margin-top': '170px'}, 880);
  $('p[data-info="html-hours"]').stop().animate({opacity: '1', 'font-size': '45px'},890);
  $('p[data-info="css-hours"]').stop().animate({opacity: '1', 'font-size': '45px'},890);
  $('p[data-info="js-hours"]').stop().animate({opacity: '1', 'font-size': '45px'},890);
  PoIt3Ran = true;
} else if(position <= -3650 && position >= -3750 && PoIt3Ran === true) { // fade out portfolio 3
  $('h2[data-info="timeSpent"]').stop().animate({'margin-top': '-100px'}, 360);
  $('p[data-info="html-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},300);
  $('p[data-info="css-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},300);
  $('p[data-info="js-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},300);
  PoIt3Ran = false;
}
  
// -------------------------
//  Portfolio Item 4 code
// -------------------------
if(position >= -3934 && position <= -3820 && PoIt4Ran === true){ //fade out portfolio4
  $('h2[data-info="watImLearning"]').stop().animate({'margin-top': '-170px'},360)
  $('img[data-info="es6-l"]').stop().animate({bottom: '-300px'},300);
  $('img[data-info="jquary-l"]').stop().animate({right: '1400px'},300);
  $('img[data-info="less-l"]').stop().animate({left: '1400px'},300);
  PoIt4Ran = false;
} else if(position <= -3950 && position >= -4250 && PoIt4Ran === false){ // fade in portfolio4
  $('h2[data-info="watImLearning"]').stop().animate({'margin-top': '170px'},360)
  $('img[data-info="es6-l"]').stop().animate({bottom: '80px'},600);
  $('img[data-info="jquary-l"]').stop().animate({right: '50px'},600);
  $('img[data-info="less-l"]').stop().animate({left: '50px'},600);
  PoIt4Ran = true;
} else if(position <= -4390 && position >= -4550 && PoIt4Ran === true){ // fade out portfolio4
  $('h2[data-info="watImLearning"]').stop().animate({'margin-top': '-170px'},360)
  $('img[data-info="es6-l"]').stop().animate({bottom: '-300px'},300);
  $('img[data-info="jquary-l"]').stop().animate({right: '1400px'},300);
  $('img[data-info="less-l"]').stop().animate({left: '1400px'},300);
  PoIt4Ran = false;
}

  
// -------------------------
//  Portfolio Item 5 code
// -------------------------
if(position >= -4760 && position <= -4600 && PoIt5Ran === true){ // fade out portfolio5
  $('h2[data-info="watIkWilLeren"]').stop().animate({'margin-top': '-170px'},360);
  node.stop().animate({top: '700px'},400);
  php.stop().animate({top: '-500px'},400);
  react.stop().animate({top: '700px'},400);
  PoIt5Ran = false;
} else if(position <= -4775 && position >= -5100 && PoIt5Ran === false){ // fade in portfolio5
  $('h2[data-info="watIkWilLeren"]').stop().animate({'margin-top': '170px'},360);
  node.stop().animate({top: '-100px'},760);
  node.animate({top: '100px'},600);
  node.animate({top: '10px'},600);
  php.stop().animate({top: '200px'},760);
  php.animate({top: '-100px'},600);
  php.animate({top: '10px'},600);
  react.stop().animate({top: '-100px'},760);
  react.animate({top: '100px'},600);
  react.animate({top: '10px'},600);
  PoIt5Ran = true;
} else if(position <= -5200 && position >= -5400 && PoIt5Ran === true){ // fade out portfolio5
  $('h2[data-info="watIkWilLeren"]').stop().animate({'margin-top': '-170px'},360);
  node.stop().animate({top: '700px'},400);
  php.stop().animate({top: '-500px'},400);
  react.stop().animate({top: '700px'},400);
  PoIt5Ran = false;
}

// -------------------------
//  Portfolio Item 6 code
// -------------------------
  if (position >= -5600 && PoIt6Ran === true){ // fade out portfolio6
    $('h2[data-info="WhatIUse"]').stop().animate({'margin-top': '-170px'},360);
    // vscode.stop().animate({});
    // gitkraken.stop().animate({},);
    // digitalOcean.stop().animate({},);
  } else if(position <= -5615 && position >= -5900 && PoIt6Ran === false){ // fade in portfolio6
    $('h2[data-info="WhatIUse"]').stop().animate({'margin-top': '170px'},360);
    // vscode.stop().animate({});
    // gitkraken.stop().animate({},);
    // digitalOcean.stop().animate({},);
  } else if(position <= -6000 && PoIt6Ran === true){ // fade out portfolio6
    $('h2[data-info="WhatIUse"]').stop().animate({'margin-top': '-170px'},360);
    // vscode.stop().animate({});
    // gitkraken.stop().animate({},);
    // digitalOcean.stop().animate({},);
  }
  
// --------------------------
//    Background Music
// --------------------------
  
if(e.keyCode === 32 && audioPlaying === false){ // als gebruiker op spatie drukt en audioPlaying = false dan start de achtergrond muziek
  backgroundMusic.play();
  musicSwitch.style.backgroundPosition = '0px';
  audioPlaying = true;
} else if(e.keyCode === 32 && audioPlaying === true){ // Als de gebruiker op de spadie drukt en audioPlaying = true dan stop de achtergrond muziek
  backgroundMusic.pause();
  musicSwitch.style.backgroundPosition = '-65px';
  audioPlaying = false;
}
}

function backgroundMusicSwitch(){ // Zelfde als ^above maar dan wordt deze getrigged als iemand op de muziek switch drukt.
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

function characterReset(){ // Resets the character to the not moving sprite
  character.src = "links/character/notMoving@2x.png";
}

container.addEventListener('keydown', walk); // Als er op een knop wordt gedrukt voer de functie 'walk' uit
container.addEventListener('keyup', characterReset); // als de knop wordt los gelaten voor de functie 'characterReset' uit

// Dev test function so i dont have hold arrow keys. Fires all animations with a set delay

function devTest(){ // fade in portfolio 1
  $('.guide').fadeOut('slow');
  $('.portfolio-item1').stop().animate({width: '1200px', padding: '15px'}, 620);
  $(".introductieText").typed({
        strings: ["Hallo, Ik ben yannick!", "Ik Volg de opleiding Mediavormgeving in de richting interactief op het MediaCollege Amsterdam.", "Deze hele basis simpele 'game' is gemaakt met javascript met de Jquary library", "Je kan het process vinden op de github project pagina door op de knop rechts bovenin te drukken", "~Yannick Frisart MV2C", "────────────────────────────────────<br>──────────▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄──────────<br>────────▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄────────<br>──────▐▌▒████▒▒▒▒▒▒▒▒████▒▒▐▌──────<br>──────▐▌▒▒████▒▒▒▒▒▒▒▒████▒▒▐▌──────<br>▐▌▀▄──▐▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐▌──▄▀▐▌<br>▐▌▒▒▀▄▐▌▒▒▐▌▀▄▄▀▀▄▄▀▀▄▄▀▐▌▒▒▐▌▄▀▒▒▐▌<br>▐▌▒▒▒▒▐▌▒▒▐▌▒▒▒▒▒▒▒▒▒▒▒▒▐▌▒▒▐▌▒▒▒▒▐▌<br>──▀▄▒▒▐▌▒▒▐▌▒▒▒▒▒▒▒▒▒▒▒▒▐▌▒▒▐▌▒▒▄▀──<br>────▀▄▐▌▒▒▐▌▒▒▒▒▒▒▒▒▒▒▒▒▐▌▒▒▐▌▄▀────<br>──────▐▌▒▒▐▌▄▀▀▄▄▀▀▄▄▀▀▄▐▌▒▒▐▌──────<br>──────▐▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐▌──────<br>──────▐▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐▌──────<br>Yannick's Macbook Pro: yannick$ git push"],
        typeSpeed: 0,
        backDelay: 2200,
        contentType: 'html'
  });
  setTimeout(function() { // fade out portfolio 1
    $('.portfolio-item1').stop().animate({width: '0px', padding: '0px'}, 320);
    setTimeout(function() { // fade in portfolio 2
      $('h2[data-info="vaardigheden"]').stop().animate({top: '-50px'}, 670);
      $('img[data-info="css3"]').stop().animate({top: '120px'}, 690, 'swing');
      $('img[data-info="html5"]').stop().animate({top: '120px'}, 690, 'swing');
      $('img[data-info="js"]').stop().animate({top: '120px'}, 690, 'swing');
      setTimeout(function() { // fade out portfolio 2
        $('h2[data-info="vaardigheden"]').stop().animate({top: '-290px'}, 360);
        $('img[data-info="css3"]').stop().animate({top: '800px'}, 370);
        $('img[data-info="html5"]').stop().animate({top: '800px'}, 370);
        $('img[data-info="js"]').stop().animate({top: '800px'}, 370);
        setTimeout(function() { // fade in portfolio 3
          $('h2[data-info="timeSpent"]').stop().animate({'margin-top': '170px'}, 880);
          $('p[data-info="html-hours"]').stop().animate({opacity: '1', 'font-size': '45px'},890);
          $('p[data-info="css-hours"]').stop().animate({opacity: '1', 'font-size': '45px'},890);
          $('p[data-info="js-hours"]').stop().animate({opacity: '1', 'font-size': '45px'},890);
          setTimeout(function() { // fade out portfolio 3
            $('h2[data-info="timeSpent"]').stop().animate({'margin-top': '-100px'}, 360);
            $('p[data-info="html-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},300);
            $('p[data-info="css-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},300);
            $('p[data-info="js-hours"]').stop().animate({opacity: '0', 'font-size': '10px'},300);
            setTimeout(function() { // fade in portfolio 4
              $('h2[data-info="watImLearning"]').stop().animate({'margin-top': '170px'},360)
              $('img[data-info="es6-l"]').stop().animate({bottom: '80px'},600);
              $('img[data-info="jquary-l"]').stop().animate({right: '50px'},600);
              $('img[data-info="less-l"]').stop().animate({left: '50px'},600);
              setTimeout(function() { // fade out portfolio 4
                $('h2[data-info="watImLearning"]').stop().animate({'margin-top': '-170px'},360)
                $('img[data-info="es6-l"]').stop().animate({bottom: '-300px'},300);
                $('img[data-info="jquary-l"]').stop().animate({right: '1400px'},300);
                $('img[data-info="less-l"]').stop().animate({left: '1400px'},300);
                setTimeout(function() { // Fade in portfolio 5
                  $('h2[data-info="watIkWilLeren"]').stop().animate({'margin-top': '170px'},360);
                  node.stop().animate({top: '-100px'},760);
                  node.animate({top: '100px'},600);
                  node.animate({top: '10px'},600);
                  php.stop().animate({top: '200px'},760);
                  php.animate({top: '-100px'},600);
                  php.animate({top: '10px'},600);
                  react.stop().animate({top: '-100px'},760);
                  react.animate({top: '100px'},600);
                  react.animate({top: '10px'},600);
                  setTimeout(function() { // Fade out Portfolio 5
                    $('h2[data-info="watIkWilLeren"]').stop().animate({'margin-top': '-170px'},360);
                    node.stop().animate({top: '700px'},400);
                    php.stop().animate({top: '-500px'},400);
                    react.stop().animate({top: '700px'},400);
                    setTimeout(function() { // fade in portfolio 6
                      $('h2[data-info="WhatIUse"]').stop().animate({'margin-top': '170px'},360);
                      // vscode.stop().animate({});
                      // gitkraken.stop().animate({},);
                      // digitalOcean.stop().animate({},);
                      setTimeout(function() { // fade out portfolio 6
                        $('h2[data-info="WhatIUse"]').stop().animate({'margin-top': '-170px'},360);
                        // vscode.stop().animate({});
                        // gitkraken.stop().animate({},);
                        // digitalOcean.stop().animate({},);
                      }, 8000);
                    }, 400);
                  }, 8000);
                }, 400);
              }, 8000);
            }, 400);
          }, 8000);
        }, 400);
      }, 8000);
    }, 400);
  }, 8000);
}