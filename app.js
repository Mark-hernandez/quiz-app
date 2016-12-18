var state = {
	quiz: [
		{
			question: "What color are coffee beans before they are roasted?",
			options: ["White", "Brown", "Green", "Orange"],
			answer: "Green",
			index: 2,
		},
		{
			question: "On average, How many cups are consumed by Americans each day?",
			options: ['100 million', '235 Million', '400 Million', '587 Million'],
			answer: "400 Million",
			index: 2,
		},
		{
			question: "What are the two main types of coffee beans?",
			options: ['Robusta and Augusta', 'Arabica and Aromatic', 'Caffeine and Green', 'Arabica and Robusta'],
			answer: "Arabica and Robusta",
			index: 3,
		},
		{
			question: "Where does coffee originate from?",
			options: ['Columbia', 'Argentina', 'Hawaii', 'Ethiopia'],
			answer: 'Ethiopia',
			index: 3,
		},
		{
			question: "What country is the leading coffee consumer?",
			options: ['Italy', 'United States', 'Italy', 'Columbia'],
			answer: "United States",
			index: 1,
		}
	],
	correctAnswerFeedback : [
	"Correct! Please move along!"
	],

	incorrectAnswerFeedback : [
	"Your anser is incorrect, Please try again."
	],
	
	currentQuestion: 0,
	score: 0,	
	route: 'start',
	lastAnswer: false,
	feedback: 0
};



function starting(state, route){
	state.start = start;
};

function startOver(state) {
	state.score = 0;
	state.currentQuestion = 0;
	starting(state, 'start');
};

function questionResponse(state, answer) {
	var currentQuestions = state.question[state.currentQuestion];
	state.lastAnswer = currentQuestion.currentQuestion === answer;
	if (state.lastAnswer) {
		state.score++;
	};
	feedback(state);
	setRoute(state, 'answer-feedback');
};

function feedbackSelect(state) {
	state.feedback = Math.random();
};


function advance(state) {
	state.currentQuestion++;
	if (state.currentQuestion === state.quiz.length) {
		starting(state, 'final-feedback');
	}
	else {
		starting(state, 'question');
	}
};

function render(state, elements) {
	Object.keys(elements).forEach(function(route) {
		elements[route].hide();
	});
	elements[state.route].show();

	if(state.route === 'start') {
		renderStartPage(state,elements[state.route]);
	}
	else if (state.route === 'question') {
		renderQuestionPage(state, elements[state.route])
	}
	else if (state.route === 'answer-feedback') {
		renderAnswerFeedbackPage(state, elements[state.route]);
	}
	else if (state.route === 'final-feedback') {
		renderFinalFeedbackPAge(state, elements[state.route]);
	}
};

function renderStartPage(state, element) {
};

function renderFirstQuestion(state, element) {
	renderQuestioncount(state, element.find('.questionumber'));
	renderQeustionText(state, element.find('.question-text'));
	renderChoices(state,element.find('.answera'));
	renderChoices(state,element.find('.answerb'));
	renderChoices(state,element.find('.answerc'));
	renderChoices(state,element.find('.answerd'));
};


function renderQuestionCount(state, element) {
	var text = (sate.currentQuestion +1) + "/" + state.question.length;
	element.text(text);
};

function renderQuestionText(state, element) {
	var currentQuestions = state.question[state.currentQuestion];
	element.text(currentQuestions.text)
};

function renderChoices(state,element) {
	var currentQuestions = state.question[state.currentquestion];
	var choices = currentquestion.choices.map(function(choice, index) {
		return (
      		'<li>' +
        		'<input type="radio" name="user-answer" value="' + index + '" required>' +
        		'<label>' + choice + '</label>' +
      		'</li>'
    	);
  });
  element.html(choices);
};

function renderNextButtonText(state, element) {
    var text = state.currentQuestion < state.questions.length - 1 ?
      "Next" : "How did I do?";
  element.text(text);
};

function renderFinalFeedbackText(state, element) {
  var text = "You got " + state.score + " out of " +
    state.questions.length + " questions right.";
  element.text(text);
};

function renderFinalFeedbackText(state, element) {
  var text = "You got " + state.score + " out of " +
    state.questions.length + " questions right.";
  element.text(text);
};














$(document).ready(function(){
 
	$('.splashscreen').hide();
  

  
  $('.coffeemug').click(function(){
	 $('h1, h2').hide(200);
  });
      
    
  $('.coffeemug').click(function(){
  	$('.splashscreen').show(200); 
  });
  
  
    
 });
 
 


 

 




