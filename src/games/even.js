import { getRandomNumber } from '../source.js';

function isEven(num) {
  return num % 2 === 0;
}

export function getRulesForEven() {
  return 'Answer "yes" if the number is even, otherwise answer "no".';
}

export function getQuestionForEven() {
  return getRandomNumber();
}

export function getCorrectAnswerForEven(question) {
  return isEven(question) ? 'yes' : 'no';
}
