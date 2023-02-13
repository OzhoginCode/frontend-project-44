import readlineSync from 'readline-sync';

export function welcome() {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
}

export function getRandomNumber(limit = 30) {
  return Math.floor(Math.random() * limit + 1);
}
