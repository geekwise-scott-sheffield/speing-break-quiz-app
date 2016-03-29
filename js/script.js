/////////////////////////////////////////////////////////////////////////////////////
//testing area and index example all above, code below is for seporate question pages
/////////////////////////////////////////////////////////////////////////////////////
function showNext(){
    document.querySelector("#hidePlaceHolder").style.display = "none";
    document.querySelector("#nextQ").style.display = "block";
}

function totalScore(){
    var score = localStorage.getItem("count");
    if(score == null || score == "null"){
        var count = 0;
    }else{
        count = parseInt(score);
    }
    count++;
    //testing purposes; ignore
    //alert(count);
    localStorage.setItem("count", count);

    return count;
}
//not implemented, use for developer purposes only
function viewScore(){
    var score = localStorage.getItem("count");
    if(score == null || score == "null"){
        var count = 0;
    }else{
        count = parseInt(score);
    }
    localStorage.setItem("count", count);

    return count;
}



//array for quiz questions
var quizArray = [
    "What TV star was caught being trolled by the over 9000 meme?",
    "What site was the now famous Leroy Jenkins World of Warcraft video first uploaded to?",
    "Which YouTuber was among the first to popularize internet phenomenon known as trollbait?",
    "Trolls, in the internet webcomic Homestuck, are easily identified by their candy cane horns and ___ colored skin",
    "the comment based site ___ resorted to DDOS attacks in a flame war over the internet personality Boxxy"
];
var answerOptions = document.querySelectorAll(".answerOpts");

//function is ran if user selects wrong answer
function wrongAnswer(){
    document.querySelector("#hidePlaceHolder").style.display = "none";
    document.querySelector("#nextQ").style.display = "block";
}

//function is ran if user selects right answer
function rightAnswer(){
    document.querySelector("#hidePlaceHolder").style.display = "none";
    document.querySelector("#nextQ").style.display = "block";
    totalScore();
}
//
//function popup(){
//    document.querySelector(".popup").style.display = "block";
//    answerOptions[0].disabled = true;
//    answerOptions[1].disabled = true;
//    answerOptions[2].disabled = true;
//    answerOptions[3].disabled = true;
//}


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