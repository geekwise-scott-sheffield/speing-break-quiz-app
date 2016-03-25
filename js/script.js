var correct = document.querySelectorAll(".answerOpts");
var wrong = document.querySelectorAll(".answerOpts");


function indexChoiceExample(){
    correct[0].style.backgroundColor = "limegreen";
    correct[0].textContent = "right answer";
    wrong[1].style.backgroundColor = "crimson";
    wrong[1].textContent = "wrong answer";
    wrong[2].style.backgroundColor = "crimson";
    wrong[2].textContent = "wrong answer";
    wrong[3].style.backgroundColor = "crimson";
    wrong[3].textContent = "wrong answer";
}

function showNext(){
    document.querySelector("#hidePlaceHolder").style.display = "none";
    document.querySelector("#nextQ").style.display = "block";
}


var questionArray = ["question5/7", "question2", "question3", "question4", "question5" ];

//document.querySelector("#hidePlaceHolder").textContent = "questionArray[0]";
//document.querySelector("#hidePlaceHolder").textContent = questionArray[0];


/////////////////////////////////////////////////////////////////////////////////////
//testing area and index example all above, code below is for seporate question pages
/////////////////////////////////////////////////////////////////////////////////////

function wrongAnswer(){
    document.querySelector("#hidePlaceHolder").style.display = "none";
    document.querySelector("#nextQ").style.display = "none";
    document.querySelector("#wrongAnswer").style.display = "block";
}
function rightAnswer(){
    document.querySelector("#hidePlaceHolder").style.display = "none";
    document.querySelector("#wrongAnswer").style.display = "none";
    document.querySelector("#nextQ").style.display = "block";
}

//targets the possible answer buttons in html
var yes = document.querySelectorAll(".answerOpts");
var no = document.querySelectorAll(".answerOpts");

function rightAnswer1(){
    yes[0].style.backgroundColor = "limegreen";
    no[1].style.backgroundColor = "crimson";
    no[2].style.backgroundColor = "crimson";
    no[3].style.backgroundColor = "crimson";
}
function rightAnswer2(){
    yes[2].style.backgroundColor = "limegreen";
    no[0].style.backgroundColor = "crimson";
    no[1].style.backgroundColor = "crimson";
    no[3].style.backgroundColor = "crimson";
}
function rightAnswer3(){
    yes[1].style.backgroundColor = "limegreen";
    no[0].style.backgroundColor = "crimson";
    no[2].style.backgroundColor = "crimson";
    no[3].style.backgroundColor = "crimson";
}
function rightAnswer4(){
    yes[0].style.backgroundColor = "limegreen";
    no[1].style.backgroundColor = "crimson";
    no[2].style.backgroundColor = "crimson";
    no[3].style.backgroundColor = "crimson";
}
function rightAnswer5(){
    yes[3].style.backgroundColor = "limegreen";
    no[0].style.backgroundColor = "crimson";
    no[1].style.backgroundColor = "crimson";
    no[2].style.backgroundColor = "crimson";
}


