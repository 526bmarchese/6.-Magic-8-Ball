//GET user Name
let userName = prompt("what is your name?")

//Get user Name to Website
userName ? document.getElementById('greeting').innerText=`Hello, ${userName}` : document.getElementById('greeting'). innerText='Hello Stranger'


function shakeMagic8Ball(){
    //Get User Question
let userQuestion = 'Will I adopt a new puppy soon?';

console.log(`${userName} has asked - ${userQuestion}`)

//DO NOT TOUCH THIS CODE!
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
    case 0:
        eightBall = 'It is certain.';
        break;
    case 1:
        eightBall = 'It is decidely so.';
        break;
    case 2:
        eightBall = 'Reply hazy try again.';
        break;
    case 3:
        eightBall = 'Cannot predict now.';
        break;
    case 4:
        eightBall = 'Do not count on it.';
        break;
    case 5:
        eightBall = 'My sources say no.';
        break;
    case 6:
        eightBall = 'Outlook not so good.';
        break;
    case 7:
        eightBall = 'Signs point to yes.';
        break;
}

console.log(`The Magic 8 Ball says ${eightBall}`)
}