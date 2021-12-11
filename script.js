function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// Question prototype
Question.prototype.chechkAnswer = function(answer){
    return this.answer === answer;
}

// Quiz Constructor 
function Quiz(question){
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0
}


// Quiz Prototype 
Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

// Quiz isFinish

Quiz.prototype.isFinish = function(){
    return this.questions.length === this.questionIndex;
}

// Quis  guess

Quiz.prototype.guess = function(answer){
    var question = this.getQuestion();

    if(question.chechkAnswer(answer)){
        this.score++
    }
    this.questionIndex++;
}


var q1 = new Question("what is the best programming language?",["C#","JS","Pyhton","asp.net"],"JS");

var q2 = new Question("What is the most popular language?",["C#","visual basic","node.js","JS"],"JS");

var q3 = new Question("What is the best modern programming language?",["C++","angular","react","JS"],"JS");

var q4 = new Question("What is the best modern programming language?",["Pascal","vue","react","JS"],"JS");

var questions = [q1,q2,q3,q4];

var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion(){
    if(quiz.isFinish()){
        showScore();
    }else{

        var question = quiz.getQuestion();
        var choices = question.choices;

        document.querySelector('#question').textContent = question.text;

        for(var i=0; i<choices.length;i++){
            var element = document.querySelector('#choice'+i);
            element.innerHTML = choices[i];

            guess('btn'+i,choices[i]);
        }

        showProgress();
    }
}


function guess(id,guess){
 var btn = document.getElementById(id);
 btn.onclick = function(){
     quiz.guess(guess);
     loadQuestion()
 }
}

function showScore(){
    var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;

    document.querySelector('.card-body').innerHTML = html;
}

function showProgress(){
    var totalQuestion = quiz.questions.length;
    var questionNumber = quiz.questionIndex+1;
    document.querySelector('#progress').innerHTML = 'Question '+questionNumber + ' of  ' + totalQuestion;
}