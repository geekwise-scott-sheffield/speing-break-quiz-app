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



//function popup(){
//    document.querySelector("#popup").style.display = "block"
//}



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


//function is run if user selects right answer
function rightAnswer(){
    document.querySelector("#hidePlaceHolder").style.display = "none";
    document.querySelector("#nextQ").style.display = "block";
}

function popup(){
    document.querySelector(".popup").style.display = "block";
    answerOptions[0].disabled = true;
    answerOptions[1].disabled = true;
    answerOptions[2].disabled = true;
    answerOptions[3].disabled = true;
}


//unique question and answer set for question 1
if(window.location.pathname === '/spring-break-quiz-app/question1.html'){
    function question1(){
        document.querySelector("#question1").textContent = quizArray[0];
    }
    window.onload = question1();
}

//unique question and answer set for question 2
if(window.location.pathname === '/spring-break-quiz-app/question2.html'){
    function question2(){
        document.querySelector("#question2").textContent = quizArray[1];
    }
    window.onload = question2();
}

//unique question and answer set for question 3
if(window.location.pathname === '/spring-break-quiz-app/question3.html'){
    function question3(){
        document.querySelector("#question3").textContent = quizArray[2];
    }
    window.onload = question3();
}

//unique question and answer set for question 4
if(window.location.pathname === '/spring-break-quiz-app/question4.html'){
    function question4(){
        document.querySelector("#question4").textContent = quizArray[3];
    }
    window.onload = question4();
}

//unique question and answer set for question 5
if(window.location.pathname === '/spring-break-quiz-app/question5.html') {
    function question5() {
        document.querySelector("#question5").textContent = quizArray[4];
    }
    window.onload = question5();
}