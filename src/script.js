// var boy=document.getElementById("boy");
//
//     idleImageNumber=1;
//     idleAnimationNumber=0;
//
// function idleAnimation(){
//
//     idleImageNumber = idleImageNumber + 1 ;
//
//         if (idleImageNumber==10){
//                    idleImageNumber=1;
//                                 }
//
//         boy.src="resources/sprites/png/Idle ("+idleImageNumber+").png";
//
//                        }
//
// function idleAnimationStart() {
//
// idleAnimationNumber = setInterval(idleAnimation,200);
//
//                               }
//     runAnimationNumber=0;
//     runImageNumber=1;
//
//     function runAnimation(){
//
//         runImageNumber = runImageNumber + 1;
//
//         if (runImageNumber==11){
//
//             runImageNumber=1;
//         }
//
//     boy.src="resources/sprites/png/Run ("+runImageNumber+").png";
//     }
//
//
//
// function  runAnimationStart(){
//         runAnimationNumber = setInterval(runAnimation,100);
//         clearInterval(idleAnimationNumber);
//     }
// jumpImageNumber=1;
// jumpAnimationNumber=0;
// boyMarginTop = 410;
//
//     function jumpAnimation(){
//         jumpImageNumber=jumpImageNumber+1;
//
//         if(jumpImageNumber <= 6){
//             boyMarginTop = boyMarginTop - 20;
//             boy.style.marginTop = boyMarginTop + "px";
//         }
//         if(jumpImageNumber >=7 ){
//             boyMarginTop = boyMarginTop + 20 ;
//             boy.style.marginTop = boyMarginTop + "px";
//         }
//
//         if(jumpImageNumber==11){
//             jumpImageNumber=1;
//             clearInterval(jumpAnimationNumber);
//             jumpAnimationNumber =0;
//             runImageNumber = 0;
//             runAnimationStart();
//
//         }
//
//         boy.src="resources/sprites/png/Jump ("+jumpImageNumber+").png";
//
//     }
// function jumpAnimationStart(){
//         clearInterval(idleAnimationNumber);
//         runImageNumber = 0;
//         clearInterval(runAnimationNumber);
//         jumpAnimationNumber = setInterval(jumpAnimation,100);
// }
//
//
//
//     function keyCheck(event){
// // alert(event.which);
// // enter=13
//         //space=32
//        var keyCode=event.which;
//
//         if(keyCode == 13){
//
//                   if(runAnimationNumber == 0){
//                            runAnimationStart();
//                   }
//
//
//                   if(moveBackgroundAnimationId==0){
//                           moveBackgroundAnimationId= setInterval(moveBackground,100);
//
//                   }
//
//         }
//                     if(keyCode==32){
//
//                              if (jumpAnimationNumber==0){
//                                     jumpAnimationStart();
//                                                         }
//                              if(moveBackgroundAnimationId==0){
//                                      moveBackgroundAnimationId= setInterval(moveBackground,100);
//
//                                                               }
//
//                   }
//
//
//
//
//     }
//
//
//  //-----------------------------------------------------------------------------------------------------------------------------
//
//     var backgroundImagePositionX=0;
//     moveBackgroundAnimationId=0;
//
//     function moveBackground(){
//         backgroundImagePositionX = backgroundImagePositionX-20;
//         document.getElementById("background").style.backgroundPositionX=backgroundImagePositionX+"px";
//                              }
//
// //-----------------------------------------------------------------------------------------------------------------------------------
//
//
// boxMarginLeft = 500;
// function createBoxes() {
//     var box = document.createElement("div");
//     box.className = "box";
//
//     document.getElementById("background").appendChild(box);
//
//
//     for (var i = 0; i <= 10; i++) {
//
//
//
//         box.style.marginLeft = boxMarginLeft + "px";
//          // boxMarginleft = boxMarginleft +500;
//
//         if(i<5){
//             boxMarginLeft = boxMarginLeft +750;
//         }
//         if(i>=5){
//             boxMarginLeft = boxMarginLeft + 500;
//         }
//     }
// }
//
// //
// // boxMarginLeft = 500;
// //
// // function createBoxes(){
// //
// //     var box = document.createElement("div");
// //     box.className = "box";
// //     document.getElementById("background").appendChild(box);
// //
// //
// //     for (var i = 0; i <= 10; i++) {
// //
// //        box.style.marginLeft = boxMarginLeft + "px";
// //
// //        // boxMarginLeft = boxMarginLeft +500;
// //
// //         if (i < 5) {
// //             boxMarginLeft = boxMarginLeft + 500;
// //         }
// //         if (i >= 5) {
// //             boxMarginLeft = boxMarginLeft + 250;
// //         }
// //
// //     }
// //
// // }

var boy = document.getElementById("boy");
idleImageNumber=1;
idleAnimationNumber=0;
function idleAnimation(){

    idleImageNumber = idleImageNumber +1;

    if (idleImageNumber==10){
                   idleImageNumber=1;
                                }
    boy.src="resources/sprites/png/Idle ("+idleImageNumber+").png";
}

function idleAnimationStart() {
    idleAnimationNumber = setInterval(idleAnimation,200);


}


// --------------
//     run
// ------------------


runImageNumber=1;
runAnimationNumber=0;

function runAnimation(){

    runImageNumber=runImageNumber+1;

    if (runImageNumber==11){

            runImageNumber=1;
        }

    boy.src="resources/sprites/png/Run ("+runImageNumber+").png";
}

function  runAnimationStart(){

    runAnimationNumber = setInterval(runAnimation,100);
        clearInterval(idleAnimationNumber);
    }

jumpAnimationNumber = 0;
jumpImageNumber = 1;
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

    var keyCode=event.which;

    if(keyCode == 13){

        if(runAnimationNumber == 0){
                           runAnimationStart();
                  }
        if(moveBackgroundAnimationId==0){
            moveBackgroundAnimationId= setInterval(moveBackground,100);

        }


        if (boxAnimationId==0){
            boxAnimationId = setInterval(boxAnimation,100);
        }


    }



    if(keyCode==32){

                             if (jumpAnimationNumber==0){
                                    jumpAnimationStart();
                                                        }
                             if(moveBackgroundAnimationId==0){
                                     moveBackgroundAnimationId= setInterval(moveBackground,100);

                                                              }




        if (boxAnimationId==0){
            boxAnimationId = setInterval(boxAnimation,100);
        }

                  }


}


// ----------
//     move background
// ---------------------------

var backgroundImagePositionX=0;
var   moveBackgroundAnimationId = 0;

function moveBackground(){
    backgroundImagePositionX=backgroundImagePositionX-20;
    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX +"px";
}
boxMarginLeft = 1800;
function createBoxes() {

    for(var i=0; i<=10; i++){
        var box = document.createElement("div");
        box.className = "box";
        document.getElementById("background").appendChild(box);

        box.style.marginLeft = boxMarginLeft + "px";

        box.id = "box" + i;

//boxMarginLeft = boxMarginLeft + 500;
        if(i<5){boxMarginLeft = boxMarginLeft + 1000;}
        if(i>=5){boxMarginLeft = boxMarginLeft + 750;}
    }


}
var boxAnimationId = 0;
function boxAnimation(){
    for(var i=0; i<10; i++){

        var box = document.getElementById("box"+i);
        var currentMarginLeft = getComputedStyle(box).marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft)-25;
        box.style.marginLeft = newMarginLeft+"px"

    }
}
