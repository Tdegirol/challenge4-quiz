var timerEl = document.getElementById('timer');
var questionEl = document.getElementById('question');
var startBtn = document. getElementById('start-btn');
var mainEl = document.getElementById('main');
var introEl = document.getElementById('intro');
var answer1Btn = document.getElementById('answer1');
var answer2Btn = document.getElementById('answer2');
var answer3Btn = document.getElementById('answer3');
var answer4Btn = document.getElementById('answer4');
var quizEl = document.getElementById('quiz');

var questionsArr = ['How do you print a line on the console using javascript?', 'What is the proper syntax for creating a for loop?', 'What is my favorite color?', 'What is my favorite food?', 'What is my favorite number?'];
var rightAnswersArr = ['console.log()', 'for(var i=0; i<5; i++)','Blue','Dumplings','7'];
var question1answers = ['print','text.content=string','text.append','console.log()'];
var question2answers = ['wrong','for(var i=0; i<5; i++)','wrong2','wrong3'];
var question3answers = ['Red','Blue','Green','Orange'];
var question4answers = ['Pizza','Ice Cream', 'Dumplings', 'Salad'];
var question5answers = ['7','3','1,492','9'];

//hide Quiz section
quizEl.style.visibility='hidden';

//timer to count down from 60s
function countdown(){
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        }else {
            question.textContent = "TIME'S UP! GAME OVER";
            timerEl.textContent = '';
            clearInterval(timeInterval);
            //insert function for entering high score
        }
    },1000)
}

//Start button initiates game
startBtn.addEventListener('click', function(){
    countdown();
    introEl.textContent='';
    mainEl.style.visibility='hidden';
    quizEl.style.visibility='visible';
    console.log(rightAnswersArr[0]);
    //enter for loop to bring up each new question.
    
    // var i = 0;
    // while (i<5){
    //     questionEl.textContent = questionsArr[i];
    //     //for each answer check to see if correct
    //     answer1Btn.addEventListener('click',function(){
    //         if (answer1Btn.textContent = rightAnswersArr[i]){
    //             i++
    //         }else{
    //             timeleft=timeleft-5;
    //         }
    //         if (answer2Btn.textContent = rightAnswersArr[i]){
    //             i++
    //         }else{
    //             timeleft=timeleft-5;
    //         }
    //         if (answer3Btn.textContent = rightAnswersArr[i]){
    //             i++
    //         }else{
    //             timeleft=timeleft-5;
    //         }
    //         if (answer4Btn.textContent = rightAnswersArr[i]){
    //             i++
    //         }else{
    //             timeleft=timeleft-5;
    //         }
    //     })    
    // }
})
