const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ]
  },
  {
    question: "Who wrote the Gitanjali?",
    answers: [
      { text: "Nazrul", correct: false },
      { text: "Sharat", correct: false },
      { text: "Rabindra", correct: true },
      { text: "Bankim", correct: false },
    ]
  },
  {
    question: "Who is the best cricketer in the world?",
    answers: [
      { text: "Kohli", correct: false },
      { text: "Sachin", correct: true },
      { text: "Lara", correct: false },
      { text: "Don", correct: false },
    ]
  },
  {
    question: "What is the capital of India?",
    answers: [
      { text: "Punjab", correct: false },
      { text: "Mumbai", correct: false },
      { text: "Bihar", correct: false },
      { text: "New Delhi", correct: true },
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer");
const nextButton = document.querySelector(".next-btn");

let currentIndex = 0;
let score = 0;

function startQuiz() {
  currentIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentIndex];
  let questionNumber = currentIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
