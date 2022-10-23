
var playing = false;
var score = 0;
var action;
var timeRemaining;
var correctAnswer;

var form = document.getElementById('form');
var input = document.getElementById('input');
var answer = document.getElementById('answer');

var num1,num2,mum3,numberCount=0;

//if we click on the start/reset
document.querySelector("#startreset").onclick = () => {
    //if we are playing
    if (playing) {
        //reload page
        location.reload();
    }
    // if we are not playing
    else {
        //change the mode of playing
        playing = true;
        //set score to 0
        score = 0;
        document.querySelector("#scorevalue").innerHTML = score;
        //show countdown box
        showElement("timeremaining");
        //countdown time
        timeRemaining = 60;
        //show countdown in sec
        document.querySelector("#timeremainingvalue").innerHTML = timeRemaining;
        //hide the game over box
        hideElement("gameOver");
        //change button to reset
        document.querySelector("#startreset").innerHTML = "Reset Game";
        //start countdown
        startCountdown();
        //generate new Q&A
        makingNumber();
    }
}

    //if we click on the start/reset
    
    

//랜덤 숫자 3개 더하기
form.addEventListener('submit', function (e) {
    e.preventDefault();
{
        //if we are playing  
        if (playing == true) {
            var val = input.value;

            if (val) {
                //if correct answer
                if (val == correctAnswer) {
                    //increase score by 1
                    score++;
                    //set score value
                    document.querySelector("#scorevalue").innerHTML = score;
                    //hide wrong box and show correct box
                    hideElement("wrong");
                    showElement("correct");
                    setTimeout(() => {
                        hideElement("correct");
                    }, 1000);

                    //generate new Q&A      
                    initializeNumber();
                    makingNumber();
                }
                //if wrong answer
                else {
                    //show wrong box and hide correct box
                    hideElement("correct");
                    showElement("wrong");
                    setTimeout(() => {
                        hideElement("wrong");
                    }, 1000);
                    
                }
                form.reset();
            }
        }
    }
    
})

function startCountdown()
{
    action = setInterval(() =>
    {
        //reduce time by 1sec in loops
        timeRemaining -= 1;
        //show countdown in sec
        document.querySelector("#timeremainingvalue").innerHTML = timeRemaining;
        //no time left
        if (timeRemaining == 0) {
            //game over
            stopCountdown();
            //show game over box
            showElement("gameOver");
            //show game over message and score
            document.querySelector("#gameOver").innerHTML = "<p>Game Over!</p><p>Your score is : " + score + ".</p>";
            //hide countdown
            hideElement("timeremaining");
            //hide correct box
            hideElement("correct");
            //hide wrong box
            hideElement("wrong");
            //change the mode of playing
            playing = false;
            //change button to start 
            document.querySelector("#startreset").innerHTML = "Start Game";
        }
    }, 1000);
}

function stopCountdown()
{
    //stop countdown
    clearInterval(action);
}

function hideElement(Id)
{
    document.querySelector("#" + Id).style.display = "none";
}

function showElement(Id)
{
    document.querySelector("#" + Id).style.display = "block";
}

function makingNumber(){
    document.querySelector("#box" + 1).onclick = () => {
        if (playing) {
            num1 = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
            document.querySelector("#box" + 1).innerHTML = num1;
            numberCount++;

            if (numberCount == 3)
                generateQA();
        }
    }

    document.querySelector("#box" + 2).onclick = () => {
        if (playing) {
            num2 = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
            document.querySelector("#box" + 2).innerHTML = num2;
            numberCount++;
            if (numberCount == 3)
                generateQA();

        }
    }

    document.querySelector("#box" + 3).onclick = () => {
        if (playing) {
            num3 = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
            document.querySelector("#box" + 3).innerHTML = num3;
            numberCount++;
            if (numberCount == 3)
                generateQA();

        }
    }
}

function initializeNumber(){
    numberCount = 0;
    document.querySelector("#box" + 1).innerHTML = "";
    document.querySelector("#box" + 2).innerHTML = "";
    document.querySelector("#box" + 3).innerHTML = "";
    //document.querySelector("#question").innerHTML = "";
    
}

function generateQA() {   
    //correct answer
    correctAnswer = num1+num2+num3;
    //setting question
    //document.querySelector("#question").innerHTML = correctAnswer;
}