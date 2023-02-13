import readlineSync from 'readline-sync';
import { welcome } from './source.js';
import { getRulesForEven, getQuestionForEven, getCorrectAnswerForEven } from './games/even.js';
import { getRulesForCalc, getQuestionForCalc, getCorrectAnswerForCalc } from './games/calc.js';

const username = welcome();

function displayGameRules(game) {
  switch (game) {
    case 'even':
      getRulesForEven();
      break;
    case 'calc':
      getRulesForCalc();
      break;
    default:
      break;
  }
}

function getQuestionForGame(game) {
  switch (game) {
    case 'even':
      return getQuestionForEven();
    case 'calc':
      return getQuestionForCalc();
    default:
      return null;
  }
}

function getCorrectAnswer(game, question) {
  switch (game) {
    case 'even':
      return getCorrectAnswerForEven(question);
    case 'calc':
      return getCorrectAnswerForCalc(question);
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

export default function playGame(game) {
  displayGameRules(game);

  for (let i = 0; i < 3; i += 1) {
    if (askQuestion(game)) {
      console.log('Correct!');
    } else return;
  }
  console.log(`Congratulations, ${username}!`);
}
