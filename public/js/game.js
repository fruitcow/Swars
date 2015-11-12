	var Player= function(power){
		
		
		
		
	};
	 var power1;
	var stage = new PIXI.Container();
// create a renderer instance.
	var renderer = PIXI.autoDetectRenderer(800, 600);
	var  gameCont = document.getElementById("gameCont");
 	 gameCont.appendChild(renderer.view);
	// create an new instance of a pixi stage
	PlayerAttri();
	
	
	
  PIXI.loader.add('background','/img/background.jpg').load(function (loader, resources) {
	  
	  background= new PIXI.Sprite(resources.background.texture);
	  background.position.x = -80;
     background.position.y = 0;
     background.scale.x = 2.5;
     background.scale.y = 2.5;
	  stage.addChild(background);
	});
 
	PIXI.loader.add('power1','/img/power1.png').load(function (loader, resources) {
    // This creates a texture from a 'bunny.png' image.
     power1 = new PIXI.Sprite(resources.power1.texture);

    // Setup the position and scale of the bunny
   
	power1.position.x = 60;
    power1.position.y = 50;
    power1.scale.x = 3;
    power1.scale.y = 10;
	power1.rotation= - Math.PI / 2;
    // Add the bunny to the scene we are building.
    stage.addChild(power1);
	

    // kick off the animation loop (defined below)
    animate();
});
PIXI.loader.add('mhead','/img/mhead.png').load(function (loader, resources) {
	  
	  mhead= new PIXI.Sprite(resources.mhead.texture);
	  mhead.position.x = -12;
	  mhead.position.y = 212;
      mhead.scale.x = 1.1;
      mhead.scale.y = 1.1;
	  mhead.rotation= - Math.PI / 10;
	  stage.addChild(mhead);
	});
	PIXI.loader.add('phead','/img/Phead.png').load(function (loader, resources) {
	  
	  phead= new PIXI.Sprite(resources.phead.texture);
	  phead.position.x = 570;
	  phead.position.y = 150;
      phead.scale.x = 0.65;
      phead.scale.y = 0.65;
	  phead.rotation= - Math.PI / 30;
	  stage.addChild(phead);
	});
	
  PIXI.loader.add('body','/img/body.png').load(function (loader, resources) {
	  
	  body= new PIXI.Sprite(resources.body.texture);
	  body.position.x = -80;
      body.position.y = 40;
      body.scale.x = 1;
      body.scale.y = 1;
	  stage.addChild(body);
	});
	
 
	function animate() {
	    requestAnimationFrame( animate );
		
	    // render the stage   
	    renderer.render(stage);
	}




 function GameRules(){
	 
	 
	 
	 
	 
	 
 }







function PlayerAttri() {
		 
$(document).click(function(e) { 
    // Check for left button
	power1.scale.y += 1;
	
	
	 Player.Power+=1;
	 
	 
	 
    if (e.button == 0) {
       
		 
    }
});
	};