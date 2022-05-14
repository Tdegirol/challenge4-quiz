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
var i=0;
var questionsArr = ['How do you print a line on the console using javascript?', 'What is the proper syntax for creating a for loop?', 'What is my favorite color?', 'What is my favorite food?', 'What is my favorite number?'];
var rightAnswersArr = ['console.log()', 'for(var i=0; i<5; i++)','Blue','Dumplings','7'];
var button1answers = ['print', 'wrong', 'Red', 'Pizaa', '7'];
var button2answers = ['text.content=string', 'for(var i=0; i<5; i++)', 'Blue', 'Ice Cream', '3'];
var button3answers = ['text.append', 'wrong2', 'Green', 'Dumplings', '1'];
var button4answers = ['console.log()', 'wrong3', 'Orange', 'Salad', '9'];
//hide Quiz section
quizEl.style.visibility='hidden';

//timer to count down from 60s
function countdown(i,timeLeft){
    //var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;
        }else {
            question.textContent = "TIME'S UP! GAME OVER";
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    },1000)
    //for each answer check to see if correct
        answer1Btn.onclick = function(){
            if (button1answers[i] == rightAnswersArr[i]){
                i++;
                nextQuestion(i);
            }else{
                timeLeft -= 5;
            }}
        answer2Btn.onclick = function(){
            if (button2answers[i] == rightAnswersArr[i]){
                i++;
                nextQuestion(i);
            }else{
                timeLeft -= 5;
            }}
        answer3Btn.onclick = function(){
            if (button3answers[i] == rightAnswersArr[i]){
                i++;
                nextQuestion(i);
            }else{
                timeLeft -= 5;
            }}
        answer4Btn.onclick = function(){
            if (button4answers[i] == rightAnswersArr[i]){
                i++;
                nextQuestion(i);
            }else{
                timeLeft -= 5;
            }}

    return(i,timeLeft);
}

//Start button initiates quiz
startBtn.addEventListener('click',function(){
    countdown(i);
    mainEl.style.visibility='hidden';
    quizEl.style.visibility='visible';
    questionEl.textContent=questionsArr[0];
    answer1Btn.textContent = button1answers[0];
    answer2Btn.textContent = button2answers[0];
    answer3Btn.textContent = button3answers[0];
    answer4Btn.textContent = button4answers[0];
})

function nextQuestion(i,timeLeft,score){
    if (i==5){
        //var score = timeLeft;
        questionEl.textContent = 'Congratulations you completed the quiz! Your Score is: ' + timeLeft;
        answer1Btn.style.visibility='hidden';
        answer2Btn.style.visibility='hidden';
        answer3Btn.style.visibility='hidden';
        answer4Btn.style.visibility='hidden';
        introEl.textContent='';
        clearInterval(timeInterval);
        return(score);
    }else{
    questionEl.textContent=questionsArr[i];
    answer1Btn.textContent = '1. ' + button1answers[i];
    answer2Btn.textContent = '2. ' + button2answers[i];
    answer3Btn.textContent = '3. ' + button3answers[i];
    answer4Btn.textContent = '4. ' + button4answers[i];
    console.log(i);
    console.log(timeLeft);
    }
}





