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
    runAnimationNumber=0;
    runImageNumber=0;

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

    function keyCheck(event){
// alert(event.which);
// enter=13
        var keyCode=event.which;
        if(keyCode == 13){
            if(runAnimationNumber == 0){
                runAnimationStart();
            }

        }

    }