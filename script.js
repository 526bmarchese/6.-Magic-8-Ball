//GET user Name
let userName = prompt("what is your name?")
let responseImg = document.getElementById('response-img')
let responseText = document.getElementById('response-text')
let greeting = document.getElementById('greeting')

//Get user Name to Website
userName
    ? (greeting.innerText = `Hello, ${userName}!`)
    : (greeting.innerText = 'Hello Stranger!')

function shakeMagic8Ball() {
    //Get User Question
    let userQuestion = prompt('What do you want to ask the 8 Ball?')

    //DO NOT TOUCH THIS CODE!
    let randomNumber = Math.floor(Math.random() * 8);

    let eightBall = '';
    let imageChoice = ''

    switch (randomNumber) {
        case 0:
            eightBall = 'It is certain.';
            imageChoice = 'https://picsum.photos/id/684/600/400'
            break;
        case 1:
            eightBall = 'It is decidely so.';
                        imageChoice = 'https://picsum.photos/id/684/600/400'
            break;
        case 2:
            eightBall = 'Reply hazy try again.';
                        imageChoice = 'image3.jpg'
            break;
        case 3:
            eightBall = 'Cannot predict now.';
                        imageChoice = 'https://picsum.photos/id/684/600/400'
            break;
        case 4:
            eightBall = 'Do not count on it.';
                        imageChoice = 'https://picsum.photos/id/684/600/400'
            break;
        case 5:
            eightBall = 'My sources say no.';
                        imageChoice = 'https://picsum.photos/id/684/600/400'
            break;
        case 6:
            eightBall = 'Outlook not so good.';
                        imageChoice = 'https://picsum.photos/id/684/600/400'
            break;
        case 7:
            eightBall = 'Signs point to yes.';
                        imageChoice = 'https://picsum.photos/id/684/600/400'
            break;
    }

    console.log(`The Magic 8 Ball says ${eightBall}`)

    responseText.innerText = `${userName} has asked ${userQuestion} to the almighty 8 Ball. The 8 Ball has replied ${eightBall}!`

    responseImg.src = imageChoice

}