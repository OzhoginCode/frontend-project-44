import { getRandomNumber } from '../source.js';

export function getRulesForProgression() {
  return 'What number is missing in the progression?';
}

export function getQuestionForProgression() {
  const firstNumOfProgression = getRandomNumber();
  const stepOfProgression = getRandomNumber(10);
  const numOfSkippedNum = getRandomNumber(10);
  const array = [firstNumOfProgression];
  for (let i = 0; i < 9; i += 1) {
    array.push(array.at(-1) + stepOfProgression);
  }
  array[numOfSkippedNum - 1] = '..';

  const result = array.join(' ');
  return `${result}`;
}

function getStepOfProgression(array) {
  for (let i = 0; i < 10; i += 1) {
    if (array[i] !== '..' && array[i + 1] !== '..') return array[i + 1] - array[i];
  }
  return null;
}

export function getCorrectAnswerForProgression(question) {
  const array = question.split(' ');
  const stepOfProgression = getStepOfProgression(array);
  if (array.indexOf('..') !== 9) {
    return String(array[array.indexOf('..') + 1] - stepOfProgression);
  }
  return String(Number(array[array.indexOf('..') - 1]) + Number(stepOfProgression));
}
