import { getRandomNumber } from '../source.js';

export function getRulesForGCD() {
  return 'Find the greatest common divisor of given numbers.';
}

export function getQuestionForGCD() {
  return `${getRandomNumber()} ${getRandomNumber()}`;
}

export function getCorrectAnswerForGCD(question) {
  const numbers = question.split(' ');
  const firstNum = Number(numbers[0]);
  const secondNum = Number(numbers[1]);
  const lowestOfNums = firstNum < secondNum ? firstNum : secondNum;

  for (let i = lowestOfNums; i >= 1; i -= 1) {
    if (firstNum % i === 0 && secondNum % i === 0) return String(i);
  }

  return null;
}
