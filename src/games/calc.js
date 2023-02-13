import { getRandomNumber } from '../source.js';

function getOperation() {
  switch (getRandomNumber(3)) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return null;
  }
}

export function getRulesForCalc() {
  console.log('What is the result of the expression?');
}

export function getQuestionForCalc() {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const operation = getOperation();
  return `${firstNum} ${operation} ${secondNum}`;
}

export function getCorrectAnswerForCalc(question) {
  const array = question.split(' ');
  switch (array[1]) {
    case '+':
      return String((Number(array[0]) + Number(array[2])));
    case '-':
      return String((array[0] - array[2]));
    case '*':
      return String((array[0] * array[2]));
    default:
      return null;
  }
}
