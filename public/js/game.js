	 function Player(power){
		this.Power=power;
		
	}
	var Time=0
	var t
	var Player1=new Player(10)
	var Player2=new Player(0);
	var Power2=-10;
	var Power;
	var AI=true;
	 var power1;
	 var power2;
	
	var Start=true;
	var GameOver=true;
	var GameWin=false;
// create a renderer instance.
$("#buttons").hide();


	var renderer = PIXI.autoDetectRenderer(800, 600);
	var  gameCont = document.getElementById("gameCont");
 	 gameCont.appendChild(renderer.view);
	// create an new instance of a pixi stage
	var stage = new PIXI.Container();
	
	
  PIXI.loader.add('background','/img/background.jpg').load(function (loader, resources) {
	  
	  background= new PIXI.Sprite(resources.background.texture);
	  background.position.x = -80;
     background.position.y = 0;
     background.scale.x = 2.5;
     background.scale.y = 2.5;
	  stage.addChild(background);
	});
	
 PIXI.loader.add('power2','/img/power2.png').load(function (loader, resources) {
    // This creates a texture from a 'bunny.png' image.
     power2 = new PIXI.Sprite(resources.power2.texture);

    // Setup the position and scale of the bunny
   
	power2.position.x = 120;
    power2.position.y = 50;
    power2.scale.x = 3;
    power2.scale.y = 20;
	power2.rotation= - Math.PI / 2;
    // Add the bunny to the scene we are building.
    stage.addChild(power2);
	

    // kick off the animation loop (defined below)
    animate();
});
	PIXI.loader.add('power1','/img/power1.png').load(function (loader, resources) {
    // This creates a texture from a 'bunny.png' image.
     power1 = new PIXI.Sprite(resources.power1.texture);

    // Setup the position and scale of the bunny
   
	power1.position.x = 120;
    power1.position.y = 50;
    power1.scale.x = 3;
    power1.scale.y = 10;
	power1.rotation= - Math.PI / 2;
    // Add the bunny to the scene we are building.
    stage.addChild(power1);
	

    // kick off the animation loop (defined below)
    animate();
});

PIXI.loader.add('mhead','/img/Mhead.png').load(function (loader, resources) {
	  
	  mhead= new PIXI.Sprite(resources.mhead.texture);
	  mhead.position.x = -13;
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
	
	try{
var timerText = new PIXI.Text("Time");
timerText.anchor.x = 20;
timerText.anchor.y = 20;
timerText.x = renderer.width / 2;
 timerText.y = renderer.width / 2;
stage.addChild(timerText);
	}catch(e) {console.log("FUCK");}



 
	function animate() {
	    requestAnimationFrame( animate );
		
	    // render the stage   
	    renderer.render(stage);
	}
 
function EnemyAI(){
	if(GameOver==false){
	var AIPB=0.1
	
	if(AI==true){
Player2.Power-=AIPB;
}
	}
}	
	



 
 
function Update () {
	EnemyAI();
 Power=Player1.Power+Player2.Power;
  power1.scale.y=Power;
   if(Power<=0){
	   Power=0;
	   GameOver=true;
	   $("#buttons").show();
	    $("#TimeCount").text("遊戲結束，JOJO撐了"+Time+"秒，要分享分數嗎？");
 AI=false;
  }
   if(GameWin){
	    $("#buttons").show();
	    $("#TimeCount").text("遊戲勝利，JOJO撐了"+Time+"秒，要分享分數嗎？");
	   AI=false;
   }
   
}
setInterval(Update, 30);




function PlayerAttri() {
		 
$(document).click(function(e) { 
if(Start){
	GameOver=false;
		Start=false;
}
    // Check for left button
	if(GameOver==false){
    if (e.button == 0) {
		 Player1.Power+=0.5;
		if(Power>=19.5){
			Player1.Power-=0.5;
			//GameOVEr
			 
			 GameOver=true;
			 GameWin=true;
			 
		 }	
	
		
		
		
    }
	}
	
});

	};
function timedCount()
 {
	 if(GameOver==false){
	Time+=1;
 
  }
  t=setTimeout("timedCount()",1000)
 
 
 }


	 timedCount();
	 PlayerAttri();
	
	
	
