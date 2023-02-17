import { getRandomNumber } from '../source.js';

function isPrime(num) {
  const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  return prime.includes(num);
}

export function getRulesForPrime() {
  return 'Answer "yes" if given number is prime. Otherwise answer "no".';
}

export function getQuestionForPrime() {
  return getRandomNumber();
}

export function getCorrectAnswerForPrime(question) {
  return isPrime(question) ? 'yes' : 'no';
}
