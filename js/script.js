var qstn1_btn = document.querySelector("#q1Correct");
var qstn2_btn = document.querySelector("#q2Correct");
var qstn3_btn = document.querySelector("#q3Correct");
var qstn4_btn = document.querySelector("#q4Correct");
var qstn5_btn = document.querySelector("#q5Correct");

var wrong = document.querySelectorAll(".answerOpts");

function showNext(){
    document.querySelector("#hidePlaceHolder").style.display = "none";
    document.querySelector("#nextQ").style.display = "block";
}


function correctAnswer1(){
    qstn1_btn.style.backgroundColor = "green";
}
function correctAnswer2(){
    qstn2_btn.style.backgroundColor= "green";
}
function correctAnswer3(){
    qstn3_btn.style.backgroundColor= "green";
}
function correctAnswer4(){
    qstn4_btn.style.backgroundColor= "green";
}
function correctAnswer5(){
    qstn5_btn.style.backgroundColor= "green";
}

function wrongChoice(){
    wrong[1].style.backgroundColor = "crimson";
    wrong[2].style.backgroundColor = "crimson";
    wrong[3].style.backgroundColor = "crimson";
}
