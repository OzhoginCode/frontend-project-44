import { getRandomNumber } from '../source.js';

function getProgression(limitOfProgressionStep, progressionLength) {
  const firstNumOfProgression = getRandomNumber();
  const stepOfProgression = getRandomNumber(limitOfProgressionStep);
  const progression = [firstNumOfProgression];

  for (let i = 0; i < (progressionLength - 1); i += 1) {
    progression.push(progression.at(-1) + stepOfProgression);
  }
  return progression;
}

function getStepOfProgression(progression) {
  if (progression[0] !== '..' && progression[1] !== '..') return progression[1] - progression[0];
  return progression[3] - progression[2];
}

function getSkippedNumber(progression, stepOfProgression) {
  if (progression.indexOf('..') !== (progression.length - 1)) {
    return String(progression[progression.indexOf('..') + 1] - stepOfProgression);
  }
  return String(Number(progression[progression.indexOf('..') - 1]) + Number(stepOfProgression));
}

export function getRulesForProgression() {
  return 'What number is missing in the progression?';
}

export function getQuestionForProgression() {
  const limitOfProgressionStep = 10;
  const progressionLength = 10;
  const progression = getProgression(limitOfProgressionStep, progressionLength);

  const numOfSkippedNum = getRandomNumber(progressionLength);
  progression[numOfSkippedNum - 1] = '..';
  return `${progression.join(' ')}`;
}

export function getCorrectAnswerForProgression(question) {
  const progression = question.split(' ');
  const stepOfProgression = getStepOfProgression(progression);

  return getSkippedNumber(progression, stepOfProgression);
}
