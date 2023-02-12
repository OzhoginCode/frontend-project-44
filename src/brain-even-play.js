import readlineSync from 'readline-sync';
import welcome from './welcome.js';

const username = welcome();

function isEven(num) {
  return num % 2 === 0 ? 'yes' : 'no';
}

function askQuestion() {
  const randomNumber = Math.floor(Math.random() * 30 + 1);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (isEven(randomNumber) === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(randomNumber)}'.`);
  console.log(`Let's try again, ${username}!`);
  return false;
}

export default function playEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    if (!askQuestion()) return;
  }
  console.log(`Congratulations, ${username}!`);
}
