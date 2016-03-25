//var qstn1_btn = document.querySelector("#q1Correct");
//var qstn2_btn = document.querySelector("#q2Correct");
//var qstn3_btn = document.querySelector("#q3Correct");
//var qstn4_btn = document.querySelector("#q4Correct");
//var qstn5_btn = document.querySelector("#q5Correct");

var correct = document.querySelectorAll(".answerOpts");
var wrong = document.querySelectorAll(".answerOpts");

//function correctAnswer1(){
//    qstn1_btn.style.backgroundColor = "green";
//}
//function correctAnswer2(){
//    qstn2_btn.style.backgroundColor= "green";
//}
//function correctAnswer3(){
//    qstn3_btn.style.backgroundColor= "green";
//}
//function correctAnswer4(){
//    qstn4_btn.style.backgroundColor= "green";
//}
//function correctAnswer5(){
//    qstn5_btn.style.backgroundColor= "green";
//}

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

//testing area and index example all above, code below is for seporate question pages

function wrongAnswer(){
    document.querySelector("#hidePlaceHolder").style.display = "none";
    document.querySelector("#nextQ").style.display = "none";
    document.querySelector("#wrongAnswer").style.display = "block";
}

var yes = document.querySelectorAll(".answerOpts");
var no = document.querySelectorAll(".answerOpts");

function rightAnswer1(){
    document.querySelector("#hidePlaceHolder").style.display = "none";
    document.querySelector("#wrongAnswer").style.display = "none";
    document.querySelector("#nextQ").style.display = "block";

    yes[0].style.backgroundColor = "limegreen";
    no[1].style.backgroundColor = "crimson";
    no[2].style.backgroundColor = "crimson";
    no[3].style.backgroundColor = "crimson";
}





//make a wrong answer function that will display a button link that leads to the "fail.html" page