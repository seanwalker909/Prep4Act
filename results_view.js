
window.onload = function () {
    document.getElementById("oneForward").textContent = 1;
    document.getElementById("twoForward").textContent = 2;
    document.getElementById("threeForward").textContent = 3;
    document.getElementById("currentQuestion").textContent = "1: " + questions[0];

    document.getElementById("answerA").textContent = answers[0][0];
    document.getElementById("answerB").textContent = answers[0][1];
    document.getElementById("answerC").textContent = answers[0][2];
    document.getElementById("answerD").textContent = answers[0][3];
    
    document.getElementById("oneBack").style.visibility = 'hidden';
    document.getElementById("twoBack").style.visibility = 'hidden';
    document.getElementById("threeBack").style.visibility = 'hidden';

}

var answers = [["1", "2", "3", "4"], ["2", "3", "4", "5"], ["3", "4", "5", "9"], ["4", "8", "6", "7"], ["5", "10", "11", "520"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"]];
var questions = ["wut is 1 + 1?????!!!! ", "What is 2 + 2?", "what is 3 + 3?", "what is 4 + 4?", "what is 5 + 5?", "what is 6 + 6?", "what is 1 + 1? ", "What is 2 + 2?", "what is 3 + 3?", "what is 4 + 4?", "what is 5 + 5?", "what is 6 + 6?"];
var currentQuestionIndex = 0;

function previousQuestion(){

    var currentQuestion = document.getElementById("currentQuestion");

    if (currentQuestionIndex > 0) {

        currentQuestionIndex = currentQuestionIndex - 1;
        currentQuestion.innerHTML ="Question " + (currentQuestionIndex+1);
        document.getElementById("answerA").textContent = answers[currentQuestionIndex][0];
        document.getElementById("answerB").textContent = answers[currentQuestionIndex][1];
        document.getElementById("answerC").textContent = answers[currentQuestionIndex][2];
        document.getElementById("answerD").textContent = answers[currentQuestionIndex][3];
    }
}


function nextQuestion(buttonOffset, direction) {
    var currentQuestion = document.getElementById("currentQuestion");
    //update question buttons
    console.log(buttonOffset);
    if (direction) {
        //clearInterval(timeInterval)
        currentQuestionIndex = currentQuestionIndex + buttonOffset;
        currentQuestion.innerHTML = currentQuestionIndex + 1 + ": " + questions[currentQuestionIndex + 1];

        if (currentQuestionIndex + 1 - 3 > 0) {
            document.getElementById("threeBack").style.color = "black";
            document.getElementById("threeBack").textContent = currentQuestionIndex + 1 - 3;
            document.getElementById("threeBack").style.visibility = 'visible';
        }
        else {
            document.getElementById("threeBack").style.visibility = 'hidden';
        }

        if (currentQuestionIndex + 1 - 2 > 0) {
            document.getElementById("twoBack").style.color = "black";
            document.getElementById("twoBack").textContent = currentQuestionIndex + 1 - 2;
            document.getElementById("twoBack").style.visibility = 'visible';
        }
        else {
            document.getElementById("twoBack").style.visibility = 'hidden';
        }

        if (currentQuestionIndex + 1 - 1 > 0) {
            document.getElementById("oneBack").style.color = "black";
            document.getElementById("oneBack").textContent = currentQuestionIndex + 1 - 1;
            document.getElementById("oneBack").style.visibility = 'visible';
        }
        else {
            document.getElementById("oneBack").style.visibility = 'hidden';
        }
        document.getElementById("oneForward").textContent = currentQuestionIndex + 2;
        document.getElementById("twoForward").textContent = currentQuestionIndex + 3;
        document.getElementById("threeForward").textContent = currentQuestionIndex + 4;
    }
    else {
        //clearInterval(timeInterval)
        currentQuestionIndex = currentQuestionIndex + buttonOffset;
        currentQuestion.innerHTML = currentQuestionIndex + 1 + questions[currentQuestionIndex + 1];

        if(currentQuestionIndex - 2 > 0)
        {
            document.getElementById("threeBack").textContent = currentQuestionIndex - 2;
            document.getElementById("threeBack").hidden = false;
            document.getElementById("threeBack").style.visibility = 'visible';
        }
        else
        {
            document.getElementById("threeBack").style.visibility = 'hidden';
        }

        if(currentQuestionIndex - 1 > 0)
        {
            document.getElementById("twoBack").textContent = currentQuestionIndex - 1;
            document.getElementById("twoBack").style.color = "black";
            document.getElementById("twoBack").style.visibility = 'visible';
        }
        else
        {
            document.getElementById("twoBack").style.visibility = 'hidden';
        }
        
        if(currentQuestionIndex > 0)
        {
            document.getElementById("oneBack").textContent = currentQuestionIndex;
            document.getElementById("oneBack").style.visibility = 'visible';
            document.getElementById("oneBack").style.color = "black";
        }
        else
        {
            document.getElementById("oneBack").style.visibility = 'hidden';
        }
        
        document.getElementById("oneForward").textContent = currentQuestionIndex + 2;
        document.getElementById("twoForward").textContent = currentQuestionIndex + 3;
        document.getElementById("threeForward").textContent = currentQuestionIndex + 4;
    }

    //update ansers for current question:
    document.getElementById("answerA").textContent = answers[currentQuestionIndex][0];
    document.getElementById("answerB").textContent = answers[currentQuestionIndex][1];
    document.getElementById("answerC").textContent = answers[currentQuestionIndex][2];
    document.getElementById("answerD").textContent = answers[currentQuestionIndex][3];
    document.getElementById("currentQuestionArea").textContent = questions[currentQuestionIndex];

    //put a green box around the answer the user selected
    // document.getElementById("ansA").style.outline = "";
    // document.getElementById("ansB").style.outline = "";
    // document.getElementById("ansC").style.outline = "";
    // document.getElementById("ansD").style.outline = "";
    // if (usersSelectedAnswers[currentQuestionIndex]) {
    //     var id = "ans" + usersSelectedAnswers[currentQuestionIndex];
    //     document.getElementById(id).style.outline = "2px solid green";
    // }
    //startTimer(time_length)

}
