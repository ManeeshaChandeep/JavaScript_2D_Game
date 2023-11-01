var boy=document.getElementById("boy");

    idleImageNumber=1;
    idleAnimationNumber=0;

function idleAnimation(){

    idleImageNumber = idleImageNumber + 1 ;

        if (idleImageNumber==10){
                   idleImageNumber=1;
                                }

        boy.src="resources/sprites/png/Idle ("+idleImageNumber+").png";

                       }

function idleAnimationStart() {

idleAnimationNumber = setInterval(idleAnimation,200);

                              }
    runAnimationNumber=0;
    runImageNumber=1;

    function runAnimation(){

        runImageNumber = runImageNumber + 1;

        if (runImageNumber==11){

            runImageNumber=1;
        }

    boy.src="resources/sprites/png/Run ("+runImageNumber+").png";
    }



function  runAnimationStart(){
        runAnimationNumber = setInterval(runAnimation,100);
        clearInterval(idleAnimationNumber);
    }
jumpImageNumber=1;
jumpAnimationNumber=0;
boyMarginTop = 410;

    function jumpAnimation(){
        jumpImageNumber=jumpImageNumber+1;

        if(jumpImageNumber <= 6){
            boyMarginTop = boyMarginTop - 20;
            boy.style.marginTop = boyMarginTop + "px";
        }
        if(jumpImageNumber >=7 ){
            boyMarginTop = boyMarginTop + 20 ;
            boy.style.marginTop = boyMarginTop + "px";
        }

        if(jumpImageNumber==11){
            jumpImageNumber=1;
            clearInterval(jumpAnimationNumber);
            jumpAnimationNumber =0;
            runImageNumber = 0;
            runAnimationStart();

        }

        boy.src="resources/sprites/png/Jump ("+jumpImageNumber+").png";

    }
function jumpAnimationStart(){
        clearInterval(idleAnimationNumber);
        runImageNumber = 0;
        clearInterval(runAnimationNumber);
        jumpAnimationNumber = setInterval(jumpAnimation,100);
}



    function keyCheck(event){
// alert(event.which);
// enter=13
        //space=32
        var keyCode=event.which;

        if(keyCode == 13){

                  if(runAnimationNumber == 0){
                           runAnimationStart();
                  }


                  if(moveBackgroundAnimationId==0){
                          moveBackgroundAnimationId= setInterval(moveBackground,100);

                  }

        }
                    if(keyCode==32){

                             if (jumpAnimationNumber==0){
                                    jumpAnimationStart();
                                                        }
                             if(moveBackgroundAnimationId==0){
                                     moveBackgroundAnimationId= setInterval(moveBackground,100);

                                                              }

                  }




    }


 //-----------------------------------------------------------------------------------------------------------------------------

    var backgroundImagePositionX=0;
    moveBackgroundAnimationId=0;

    function moveBackground(){
        backgroundImagePositionX = backgroundImagePositionX-20;
        document.getElementById("background").style.backgroundPositionX=backgroundImagePositionX+"px";

                         }

//-----------------------------------------------------------------------------------------------------------------------------------
//
boxMarginleft = 500;
function createBoxes() {
    var box = document.createElement("div");
    box.className = "box";

    document.getElementById("background").appendChild(box);


    for (var i = 0; i <= 10; i++) {

         

        box.style.marginLeft = boxMarginleft + "px";
         // boxMarginleft = boxMarginleft +500;

        if(i<5){
            boxMarginleft = boxMarginleft +750;
        }
        if(i>=5){
            boxMarginleft = boxMarginleft +500;
        }
    }
}
//-------------------------------------------------------------------------------------
