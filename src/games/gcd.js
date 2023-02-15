import { getRandomNumber } from '../source.js';

export function getRulesForGCD() {
  return 'Find the greatest common divisor of given numbers.';
}

export function getQuestionForGCD() {
  return `${getRandomNumber()} ${getRandomNumber()}`;
}

export function getCorrectAnswerForGCD(question) {
  const array = question.split(' ');
  array[0] = Number(array[0]);
  array[1] = Number(array[1]);
  const lowestOfNums = array[0] < array[1] ? array[0] : array[1];

  for (let i = lowestOfNums; i >= 1; i -= 1) {
    if (array[0] % i === 0 && array[1] % i === 0) return String(i);
  }

  return null;
}
