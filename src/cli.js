import readlineSync from 'readline-sync';

export default function greeting () {
    const username = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${username}!`);
}