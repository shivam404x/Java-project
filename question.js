const quizQuestions = [
  { question: "What is your name please verify..?", answer: "You are not Shivam" },
  { question: "Which planet is known as the Blue planet..?", answer: "Earth" },
  { question: "What is 50 + 50..?", answer: "100" },
  { question: "Who is Pm of india..?", answer: "Narendar Modi" },
  { question: "Which language is used for web development?", answer: "JavaScript" }
];
// this is a program running part
let score = 0;

for (let i = 0; i < quizQuestions.length; i++) {
  let userAnswer = prompt(quizQuestions[i].question);

  if (userAnswer === null) break;

  if (userAnswer.trim().toLowerCase() === quizQuestions[i].answer.toLowerCase()) {
    alert("Correct");
    score++;
  } else {
    alert("Wrong! Correct answer is: " + quizQuestions[i].answer);
  }
}

alert("Quiz Over! Your score is " + score + " out of " + quizQuestions.length);