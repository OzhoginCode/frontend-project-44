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
  return 'What is the result of the expression?';
}

export function getQuestionForCalc() {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
  const operation = getOperation();
  return `${firstNum} ${operation} ${secondNum}`;
}

export function getCorrectAnswerForCalc(question) {
  const array = question.split(' ');
  const [firstNum, operation, secondNum] = array;

  switch (operation) {
    case '+':
      return String((Number(firstNum) + Number(secondNum)));
    case '-':
      return String((firstNum - secondNum));
    case '*':
      return String((firstNum * secondNum));
    default:
      return null;
  }
}
