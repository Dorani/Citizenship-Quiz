// Creating questions

var questions = [
  new Question("Who was the 1st president?" , ["GW", "Thomas Jeff"], "GW"),
  new Question("What do the stripes represent?" , ["ninja stars", "colonies"], "colonies"),
  new Question("who wrote the declaration of independence?" , ["Thomas Jefferson", "Roger Sherman"], "Thomas Jefferson"),
  new Question("Name the US war betweem north and south?" , ["art of war", "civil war"], "civi war"),
  new Question("What did Abraham Lincoln do?" , ["freed the slaves", "pimped rides like exibit"], "freed the slaves"),
  new Question("What are 2 parts of congress?" , ["the senate and house", "the pizza joint"], "the senate and house"),
  new Question("We elect president for how many years?" , ["4", "2"], "4"),
  new Question("Why did the colonies fight the brits?" , ["they were bored", "taxes"], "taxes"),
  new Question("What is the supreme law of the land?" , ["constitution", "bible"], "constitution"),
  new Question("How many senators?" , ["100", "4"], "100"),
  new Question("What does the constitution do?" , ["raps?", "protects rights!"], "protects rights!")
];

// Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();
