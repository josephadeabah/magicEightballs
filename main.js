let userName = 'King George';
userName
  ? console.log(`Hello, ${userName}!`)
  : console.log(`Hello!`)

let userQuestion = 'What is your age?';
console.log(`${userName} - ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

const responses = {
  0: 'It is certain',
  1: 'It is decidedly so',
  2: 'Reply hazy try again',
  3: 'Cannot predict now',
  4: 'Do not count on it',
  5: 'My sources say no',
  6: 'Outlook not so good',
  7: 'Signs point to yes'
}
eightBall = responses[randomNumber];
console.log(responses[randomNumber]);
console.log(eightBall);

