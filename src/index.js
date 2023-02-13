import readlineSync from 'readline-sync';
import welcome from './welcome.js';

const username = welcome();

function isEven(num) {
  return num % 2 === 0 ? 'yes' : 'no';
}

function getRandomNumber() {
  return Math.floor(Math.random() * 30 + 1);
}

function getQuestionForEven() {
  const randomNumber = getRandomNumber();
  return randomNumber;
}

function getQuestionForGame(game) {
  switch (game) {
    case 'even':
      return getQuestionForEven();
    default:
      return null;
  }
}

function getCorrectAnswerForEven(question) {
  return isEven(question);
}

function getCorrectAnswer(game, question) {
  switch (game) {
    case 'even':
      return getCorrectAnswerForEven(question);
    default:
      return null;
  }
}
function askQuestion(game) {
  const question = getQuestionForGame(game);
  const correctAnswer = getCorrectAnswer(game, question);

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (correctAnswer === userAnswer) {
    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
  return false;
}

function evenRules() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function displayGameRules(game) {
  switch (game) {
    case 'even':
      evenRules();
      break;
    default:
      console.log('error');
  }
}

export default function playGame(game) {
  displayGameRules(game);

  for (let i = 0; i < 3; i += 1) {
    if (askQuestion(game)) {
      console.log('Correct!');
    } else return;
  }
  console.log(`Congratulations, ${username}!`);
}
