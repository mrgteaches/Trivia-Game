$(document).ready(function() {

var vikingQuestions = [
    {
        question: "King Alfred made peace with which Viking leader?",
        answers: {
            a: "Guthrum",
            b: "Ivar the Boneless",
            c: "Sweyn Forkbeard"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of these cities was one a Viking town?",
        answers: {
            a: "Brighton",
            b: "Nottingham",
            c: "Winchester"
        },
        correctAnswer: "b"
    },
    {
        question: "What was the name for the part of England where Vikings settled?",
        answers: {
            a: "The Danelaw",
            b: "The Scandiland",
            c: "The Viking Kingdom"
        },
        correctAnswer: "a"
    },
    {
        question: "What happened in a blood feud?",
        answers: {
            a: "People refused to talk to their neighbors",
            b: "People threw buckets of pigs’ blood at one another",
            c: "Families killed one another in revenge killings"
        },
        correctAnswer: "c"
    },
    {
        question: "The richest and strongest Viking leaders were called…",
        answers: {
            a: "Barons",
            b: "Jarls",
            c: "Senators"
        },
        correctAnswer: "b"
    },
    {
        question: "What happened to someone who was made an outlaw in Viking society?",
        answers: {
            a: "He could do what he liked and not be punished",
            b: "He had to wear a funny hat to show he was bad",
            c: "He could be killed by anyone"
        },
        correctAnswer: "c"
    },
    {
        question: "Who would have bought spurs in Viking society?",
        answers: {
            a: "A horse-rider",
            b: "A shepherd",
            c: "A sailor"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of these Viking items was made of wood?",
        answers: {
            a: "Cup",
            b: "Arrowhead",
            c: "Shoe"
        },
        correctAnswer: "a"
    },
    {
        question: "In which modern city can you see the remains of Jorvik?",
        answers: {
            a: "Liverpool",
            b: "Newcastle",
            c: "York"
        },
        correctAnswer: "c"
    },
    {
        question: "What wore down Vikings’ teeth?",
        answers: {
            a: "Gritty flour in bread",
            b: "Talking too much",
            c: "Gnawing on wood"
        },
        correctAnswer: "a"
    }
];


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var output = [];
        var answers;
        for(var i=0; i<questions.length; i++){
            answers = [];
            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
        
    }
    
    showQuestions(questions, quizContainer);

	function showResults(questions, quizContainer, resultsContainer){
        var answerContainers = quizContainer.querySelectorAll('.answers');
        var userAnswer = '';
        var numCorrect = 0;
        for(var i=0; i<questions.length; i++){
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
                answerContainers[i].style.color = 'lightgreen';
            }
                else{
                    answerContainers[i].style.color = 'red';
                }
            }
            resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

var quizContainer = document.getElementById('quizGoesHere');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(vikingQuestions, quizContainer, resultsContainer, submitButton);

});