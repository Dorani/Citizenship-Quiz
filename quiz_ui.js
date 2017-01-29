var QuizUI = {
  displayNext: function(){
    if (quiz.hasEnded()){
      this.displayScore();
    } else {
      this.displayQuestion();
      this.displayChoices();
      this.displayProgress();
    }
  }
},
