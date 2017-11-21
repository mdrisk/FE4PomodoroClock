var myVar;
var masterWork = 0;
var masterBreak = 0;
var x = 0;
var y = 0;
var myPause = true;
var colorW = 0;
var colorB = 0;
var work;

function incW(){
  masterWork += 60;
  x = masterWork;
  colorW = masterWork *1000;
  $("#workTime").text(masterWork/60);
}
function decW(){
  if( masterWork > 60 && x > 60){
  masterWork -= 60;
  x = masterWork;
  colorW = masterWork *1000;
  $("#workTime").text(masterWork/60);
  }
}
function incB(){
  masterBreak += 60;
  y = masterBreak;
  colorB = masterBreak *1000;
  $("#breakTime").text(masterBreak/60);
}
function decB(){
  if( masterBreak > 60 && y > 60){
  masterBreak -= 60;
  y = masterBreak;
  colorB = masterBreak *1000;
  $("#breakTime").text(masterBreak/60);
  }
}



function start(){
  myVar = setInterval(workTimer, 1000);
  work = true;
  $("#headerInfo").text("Work, Work, Work!");
  $( "#info" ).animate({
         backgroundColor: "#310A31",
          color: "#847996",
         }, colorW );
  }

function pauseTime(){
  if(myPause){
    clearInterval(myVar);
    myPause = false;
  } else{
    myPause = true;
    if(work)
      myVar = setInterval(workTimer, 1000);
    else
      myVar = setInterval(breakTimer, 1000);
  }
}


function rest(){
  work = false;
  $( "#info" ).animate({
         backgroundColor: "#847996",
          color: "#310A31",
         }, colorB );
}

function display(x){
  var min = Math.floor(x/60);
  var sec = x%60;
  if(sec < 10)
    $("#info").text(min+":0"+sec);
  else
    $("#info").text(min+":"+sec);
}
function resetTimer(){
  display(00);
  $("#breakTime").text(00);
  $("#workTime").text(00);
  $("#headerInfo").text("Pomodoro Time");
  clearInterval(myVar);
}

function workTimer(){
  if(x > 0){
  x -=1
  display(x);
  } else {
    $("#headerInfo").text("Break Time!");
    clearInterval(myVar);
    y = 0;
    myVar = setInterval(breakTimer, 1000);
    rest();
  }
}
function breakTimer(){
  if(y < masterBreak){
  y +=1
  display(y);
  } else {
    $("#headerInfo").text("Work, Work, Work!");
    x = masterWork;
    clearInterval(myVar);
    start();

  }
}
