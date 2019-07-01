var questions = [
	['¿Cuantos Oscars ganó Titanic?', '11'],
	['¿Cuantos Oscars tiene DiCaprio?', '1'],
	['¿Quién ganó el Oscar a mejor película en 2019?', 'Green Book'],
];

var correctAnswers = 0;
var question;
var answer;
var response;
var correct = [];
var wrong = [];

function print(message) {
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message;
}

function buildList(arr) {
	var listHTML = '<ol>';
	for (var i = 0; i < arr.length; i += 1) {
		listHTML += '<li>' + arr[i] + '</li>';
	}
	listHTML += '</ol>';
	return listHTML;
}

for (var i = 0; i < questions.length; i += 1){
	question = questions[i][0];
	answer = questions[i][1];
	response = prompt(question);
	if (response === answer.toLowerCase()) {
		correctAnswers += 1;
		correct.push(question);
	} else {
		wrong.push(question);
	}
}



html = "Tú tienes " + correctAnswers + " pregunta(s) bien.";
html += '<h2>Tú tienes las siguientes preguntas bien:</h2>';
html += buildList(correct);
html += '<h2>Tú tienes las siguientes preguntas mal:</h2>';
html += buildList(wrong);
print(html);
