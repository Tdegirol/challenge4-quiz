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
var highscoreEl = document.getElementById('highscores');
var scorelistEl = document.getElementById('scorelist');
var inputEl = document.getElementById('input');
var viewScores = document.getElementById('highscore');
var userListEl = document.getElementById('userlist');
var i=0;
var questionsArr = ['How do you print a line on the console using javascript?', 'What is the proper syntax for creating a for loop?', 'What symbol is used when getting an element ID?', 'Which is more spefici, querySelector or getElementById?', 'What command exits a function?'];
var rightAnswersArr = ['console.log()', 'for(var i=0; i<5; i++)','#','getElementById','return'];
var button1answers = ['print', 'while(condition){}', '!', 'The two are unrelated', 'return'];
var button2answers = ['text.content=string', 'for(var i=0; i<5; i++)', '#', 'Both are general', 'exit'];
var button3answers = ['text.append', 'for(i<5;){}', '.', 'getElementById', 'end'];
var button4answers = ['console.log()', 'for(var i=0, i<5, i++)', '&', 'querySelector', 'endfunction'];
quizEl.style.visibility='hidden';
highscoreEl.style.visibility='hidden';
var submitBtn = document.getElementById('submit-btn');
var initialsInput = document.getElementById('initials');
var timeLeft = 60;

//timer to count down from 60s
function countdown(i){


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
                nextQuestion(i, timeLeft, timeInterval);
            }else{
                timeLeft -= 5;
            }}
        answer2Btn.onclick = function(){
            if (button2answers[i] == rightAnswersArr[i]){
                i++;
                nextQuestion(i, timeLeft, timeInterval);
            }else{
                timeLeft -= 5;
            }}
        answer3Btn.onclick = function(){
            if (button3answers[i] == rightAnswersArr[i]){
                i++;
                nextQuestion(i, timeLeft, timeInterval);
            }else{
                timeLeft -= 5;
            }}
        answer4Btn.onclick = function(){
            if (button4answers[i] == rightAnswersArr[i]){
                i++;
                nextQuestion(i, timeLeft, timeInterval);
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
    answer1Btn.textContent = '1. ' + button1answers[0];
    answer2Btn.textContent = '2. ' + button2answers[0];
    answer3Btn.textContent = '3. ' + button3answers[0];
    answer4Btn.textContent = '4. ' + button4answers[0];
})

function nextQuestion(i,timeLeft,timeInterval){
    if (i==5){
        var score = timeLeft;
        introEl.textContent='';
        timerEl.textContent = '';
        quizEl.style.visibility='hidden';
        highscoreEl.style.visibility='visible';
        inputEl.textContent = 'Congratulations you completed the quiz! \n Your Score is: ' + score;
        clearInterval(timeInterval);
        console.log(score);
        console.log(timeLeft);
        return(score,timeLeft);
    }else{
    questionEl.textContent=questionsArr[i];
    answer1Btn.textContent = '1. ' + button1answers[i];
    answer2Btn.textContent = '2. ' + button2answers[i];
    answer3Btn.textContent = '3. ' + button3answers[i];
    answer4Btn.textContent = '4. ' + button4answers[i];
    }
    return (score, timeLeft);
}

submitBtn.addEventListener("click", function(event,score,timeLeft) {
    event.preventDefault();
    // create user object from submission
    var userScores = {
        [initialsInput.value.trim()] : score
    };
    userListEl.textContent = initialsInput.value.trim() + ' ' + userScores.initialsInput.value.trim();
    console.log(score);
    console.log(timeLeft);
    console.log(userScores);
    // set new submission to local storage 
    localStorage.setItem("userScores", JSON.stringify(initialsInput.value.trim()));
  });


