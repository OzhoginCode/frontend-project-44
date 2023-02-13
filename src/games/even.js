import { getRandomNumber } from '../source.js';

function isEven(num) {
  return num % 2 === 0 ? 'yes' : 'no';
}

export function getRulesForEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

export function getQuestionForEven() {
  const randomNumber = getRandomNumber();
  return randomNumber;
}

export function getCorrectAnswerForEven(question) {
  return isEven(question);
}
