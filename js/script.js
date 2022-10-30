
var playing = false;
var score = 0;
var action;
var timeRemaining;
var correctAnswer;
var totalScore; 

var form = document.getElementById('form');
var input = document.getElementById('input');
var answer = document.getElementById('answer');

const modal_overlay = document.querySelector('#modal_overlay');
const modal = document.querySelector('#modal');

var num1, num2, mum3, numberCount = 0;
var num1Count,num2Count, num3Count;

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
        document.querySelector("#letsStart").innerText= "Please Click the Cards then enter the answer!"
        //set score to 0
        score = 0;
        num1Count, num2Count, num3Count=0;
        document.querySelector("#scorevalue").innerText = score;
        //show countdown box
        showElement("timeremaining");
        //countdown time
        timeRemaining = 60;
        //show countdown in sec
        document.querySelector("#timeremainingvalue").innerText = timeRemaining;
        //hide the game over box
        //hideElement("gameOver");
        //change button to reset
        document.querySelector("#startreset").innerText = "Reset Game";
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
                    numberCount=0;
                    num1Count=0;
                    num2Count=0;
                    num3Count=0;
                    score++;
                    
                    
                    //set score value
                    document.querySelector("#scorevalue").innerText = score;
                    setTimeout(() => {
                        hideElement("correct");
                    }, 1000);

                    //generate new Q&A      
                    initializeNumber();
                    makingNumber();
                    form.reset();
                }
                //if wrong answer
                else {
                    setTimeout(() => {
                        hideElement("wrong");
                    }, 1000);

                }
                form.reset();
            }
        }
    }

})

function startCountdown() {
    action = setInterval(() => {
        //reduce time by 1sec in loops
        timeRemaining -= 1;
        //show countdown in sec
        document.querySelector("#timeremainingvalue").innerText = timeRemaining;
        //no time left
        //totalScore = score;
        if (timeRemaining == 0) {
            //game over
            stopCountdown(score);
            openModal(true);
            playing = false;
            document.querySelector("#startreset").innerText = "Start Game";
        }
    }, 1000);
}

function openModal(value) {
    const modalCl = modal.classList
    const overlayCl = modal_overlay

    if (value) {
        document.querySelector("#totalScoreValue").innerText=totalScore;
        overlayCl.classList.remove('hidden')
        
            modalCl.remove('opacity-0')
            modalCl.remove('-translate-y-full')
            modalCl.remove('scale-150')
    } else {
        modalCl.add('-translate-y-full')
        modalCl.add('opacity-0')
        modalCl.add('scale-150')
        setTimeout(() => overlayCl.classList.add('hidden'), 300);
        location.reload();
    }   
}



function stopCountdown(score) {
    //stop countdown
    totalScore=score;
    clearInterval(action);
}

function hideElement(Id) {
    document.querySelector("#" + Id).style.display = "none";
}

function showElement(Id) {
    document.querySelector("#" + Id).style.display = "block";
}

function makingNumber() {
    document.querySelector("#Card1").onclick = () => {
        if (playing) {
            if (!num1Count) {
                num1 = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
                document.querySelector("#box" + 1).innerText = num1;
                num1Count = 1;
                numberCount++;

                if (numberCount == 3)
                    generateQA();

            }

        }
    }

    document.querySelector("#Card2").onclick = () => {
        if (playing) {
            if (!num2Count) {
                num2 = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
                document.querySelector("#box" + 2).innerText = num2;
                num2Count = 1;
                numberCount++;

                if (numberCount == 3)
                    generateQA();

            }

        }
    }

    document.querySelector("#Card3").onclick = () => {
        if (playing) {
            if(!num3Count){
                num3 = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
                document.querySelector("#box" + 3).innerText = num3;
                num3Count = 1;
                numberCount++;

                if (numberCount == 3)
                    generateQA();

            }
            
        }
    }
}

function initializeNumber() {
    document.querySelector("#box" + 1).innerText = "Click";
    document.querySelector("#box" + 2).innerText = "Click";
    document.querySelector("#box" + 3).innerText = "Click";

}

function generateQA() {
    correctAnswer = num1 + num2 + num3;

}