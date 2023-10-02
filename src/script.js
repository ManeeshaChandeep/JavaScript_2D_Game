var boy=document.getElementById("boy");

    idleImageNumber=0;
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