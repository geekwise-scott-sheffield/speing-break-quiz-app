//var correct = document.querySelectorAll(".answerOpts");
//var wrong = document.querySelectorAll(".answerOpts");
//
//
//function indexChoiceExample(){
//    correct[0].style.backgroundColor = "limegreen";
//    correct[0].textContent = "right answer";
//    wrong[1].style.backgroundColor = "crimson";
//    wrong[1].textContent = "wrong answer";
//    wrong[2].style.backgroundColor = "crimson";
//    wrong[2].textContent = "wrong answer";
//    wrong[3].style.backgroundColor = "crimson";
//    wrong[3].textContent = "wrong answer";
//}
//
function showNext(){
    document.querySelector("#hidePlaceHolder").style.display = "none";
    document.querySelector("#nextQ").style.display = "block";
}
//var questionArray = ["question5/7", "question2", "question3", "question4", "question5" ];
//document.querySelector("#hidePlaceHolder").textContent = "questionArray[0]";
//document.querySelector("#hidePlaceHolder").textContent = questionArray[0];


/////////////////////////////////////////////////////////////////////////////////////
//testing area and index example all above, code below is for seporate question pages
/////////////////////////////////////////////////////////////////////////////////////

//array for quiz questions
var quizArray = [
    "What TV star was caught being trolled by the over 9000 meme?",
    "What site was the now famous Leroy Jenkins World of Warcraft video first uploaded to?",
    "Which YouTuber was among the first to popularize internet phenomenon known as trollbait?",
    "Trolls, in the internet webcomic Homestuck, are easily identified by their candy cane horns and ___ colored skin",
    "the comment based sit ___ resorted to DDOS attacks in a flame war over the internet personality Boxxy"
];
var answerOptions = document.querySelectorAll(".answerOpts");


//function is run if user selects wrong answer
function wrongAnswer(){
    document.querySelector("#hidePlaceHolder").style.display = "none";
    document.querySelector("#nextQ").style.display = "none";
    document.querySelector("#wrongAnswer").style.display = "block";
}
//function is run if user selects right answer
function rightAnswer(){
    document.querySelector("#hidePlaceHolder").style.display = "none";
    document.querySelector("#wrongAnswer").style.display = "none";
    document.querySelector("#nextQ").style.display = "block";
}

//unique question and answer set for question 1
function question1(){
    document.querySelector("#question1").textContent = quizArray[0];
    answerOptions[0].disabled = false;
    answerOptions[1].disabled = false;
    answerOptions[2].disabled = false;
    answerOptions[3].disabled = false;
}

//unique question and answer set for question 2
function question2(){
    document.querySelector("#question2").textContent = quizArray[1];
    answerOptions[0].disabled = false;
    answerOptions[1].disabled = false;
    answerOptions[2].disabled = false;
    answerOptions[3].disabled = false;
}

//unique question and answer set for question 3
function question3(){
    document.querySelector("#question3").textContent = quizArray[2];
    answerOptions[0].disabled = false;
    answerOptions[1].disabled = false;
    answerOptions[2].disabled = false;
    answerOptions[3].disabled = false;
}

//unique question and answer set for question 4
function question4(){
    document.querySelector("#question4").textContent = quizArray[3];
    answerOptions[0].disabled = false;
    answerOptions[1].disabled = false;
    answerOptions[2].disabled = false;
    answerOptions[3].disabled = false;
}

//unique question and answer set for question 5
function question5(){
    document.querySelector("#question5").textContent = quizArray[4];
    answerOptions[0].disabled = false;
    answerOptions[1].disabled = false;
    answerOptions[2].disabled = false;
    answerOptions[3].disabled = false;
}
