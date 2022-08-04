var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//criando a jogadora Sofia
var Sofia = createSprite(20,25,18,18)
Sofia.shapeColor="red"
//criando as paredes do labirinto (parede1 - parede2)
  var wall1 
  var wall2 

//cria a taça
var cup
  
function draw() {
 //mudando a cor do plano de fundo para rosa
  background("yellow");
 
 var papelao1= createSprite(10,70,100,20)
 papelao1.shapeColor="pink"
 papelao2= createSprite(149,49,30,90)
 papelao2.shapeColor="pink"
 papelao3= createSprite(130,150,90,30)
 papelao4=createSprite(97,180,30,90)
 papelao5=createSprite(97,250,30,90)
 papelao6= createSprite(57,300,90,30)
 papelao7= createSprite(46,350,80,30)
 papelao8= createSprite(251,55,90,30)
 papelao9= createSprite(297,35,30,70)
 papelao10= createSprite(268,118,90,30)
 papelao11= createSprite(390,51,90,30)
 papelao12= createSprite(315,137,30,70)
 papelao13= createSprite(350,161,90,30)
 papelao14= createSprite(240,136,30,70)
 papelao15= createSprite(240,196,30,70)
 papelao16= createSprite(270,278,90,30)
 papelao17= createSprite(355,278,90,30)
 papelao18= createSprite(240,326,30,70)
 papelao19= createSprite(337,332,90,30)
 papelao20= createSprite(195,280,90,30)
 papelao21= createSprite(388,368,30,70)
 papelao22= createSprite(163,304,30,70)
 papelao21.shapeColor="blue"
 papelao3.shapeColor="pink"
  papelao4.shapeColor="pink"
   papelao5.shapeColor="pink"
    papelao6.shapeColor="pink"
     papelao7.shapeColor="pink"
      papelao8.shapeColor="pink"
       papelao9.shapeColor="pink"
        papelao10.shapeColor="pink"
         papelao11.shapeColor="pink"
          papelao12.shapeColor="pink"
           papelao13.shapeColor="pink"
            papelao14.shapeColor="pink"
             papelao15.shapeColor="pink"
              papelao16.shapeColor="pink"
               papelao17.shapeColor="pink"
                papelao18.shapeColor="pink"
                 papelao19.shapeColor="pink"
                  papelao20.shapeColor="pink"
                   papelao22.shapeColor="pink"
if (keyDown("UP_ARROW")) {
  Sofia.velocityX=0;
  Sofia.velocityY=-4;
}                  
if (keyDown("DOWN_ARROW")) {
  Sofia.velocityX=0;
  Sofia.velocityY=4;
}
if (keyDown("LEFT_ARROW")){
  Sofia.velocityX=-4;
  Sofia.velocityY=0;
}
if (keyDown("RIGHT_ARROW")){
  Sofia.velocityX=4;
  Sofia.velocityY=0;
}
createEdgeSprites();
Sofia.bounceOff(edges);
Sofia.bounceOff(papelao1);
Sofia.bounceOff(papelao2);
Sofia.bounceOff(papelao3);
Sofia.bounceOff(papelao4);
Sofia.bounceOff(papelao5);
Sofia.bounceOff(papelao6);
Sofia.bounceOff(papelao7);
Sofia.bounceOff(papelao8);
Sofia.bounceOff(papelao9);
Sofia.bounceOff(papelao10);
Sofia.bounceOff(papelao11);
Sofia.bounceOff(papelao12);
Sofia.bounceOff(papelao13);
Sofia.bounceOff(papelao14);
Sofia.bounceOff(papelao15);
Sofia.bounceOff(papelao16);
Sofia.bounceOff(papelao17);
Sofia.bounceOff(papelao18);
Sofia.bounceOff(papelao19);
Sofia.bounceOff(papelao20);
Sofia.bounceOff(papelao21);
Sofia.bounceOff(papelao22);

drawSprites();

}






































function resetSofia()
{
  Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);
}

function checkwin()
{
  if ( Sofia.isTouching(cup))  
{
  textSize(40);
  stroke("red");
  text("Você Venceu", 200,200);
  }
}























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
