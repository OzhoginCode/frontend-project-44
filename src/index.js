import readlineSync from 'readline-sync';
import { welcome } from './source.js';
import { getRulesForEven, getQuestionForEven, getCorrectAnswerForEven } from './games/even.js';
import { getRulesForCalc, getQuestionForCalc, getCorrectAnswerForCalc } from './games/calc.js';
import { getRulesForGCD, getQuestionForGCD, getCorrectAnswerForGCD } from './games/gcd.js';
import { getRulesForProgression, getQuestionForProgression, getCorrectAnswerForProgression } from './games/progression.js';
import { getRulesForPrime, getQuestionForPrime, getCorrectAnswerForPrime } from './games/prime.js';

const username = welcome();

function getGameRules(game) {
  switch (game) {
    case 'even':
      return getRulesForEven();
    case 'calc':
      return getRulesForCalc();
    case 'gcd':
      return getRulesForGCD();
    case 'progression':
      return getRulesForProgression();
    case 'prime':
      return getRulesForPrime();
    default:
      return null;
  }
}

function getQuestionForGame(game) {
  switch (game) {
    case 'even':
      return getQuestionForEven();
    case 'calc':
      return getQuestionForCalc();
    case 'gcd':
      return getQuestionForGCD();
    case 'progression':
      return getQuestionForProgression();
    case 'prime':
      return getQuestionForPrime();
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
    case 'gcd':
      return getCorrectAnswerForGCD(question);
    case 'progression':
      return getCorrectAnswerForProgression(question);
    case 'prime':
      return getCorrectAnswerForPrime(question);
    default:
      return null;
  }
}

function askQuestion(game) {
  const question = getQuestionForGame(game);
  const correctAnswer = getCorrectAnswer(game, question);

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (correctAnswer === userAnswer) return true;

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
  return false;
}

export default function playGame(game) {
  console.log(getGameRules(game));

  for (let i = 0; i < 3; i += 1) {
    if (askQuestion(game)) {
      console.log('Correct!');
    } else return;
  }
  console.log(`Congratulations, ${username}!`);
}
