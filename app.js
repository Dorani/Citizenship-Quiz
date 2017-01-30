// Creating questions

var questions = [
  new Question("Who was the 1st president?" , ["GW", "Thomas Jeff"], "GW"),
  new Question("How many stars on the flag?" , ["1", "50"], "50")

];

// Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();
