// Get user name
let userName = prompt("What is your name?");
let responseImg = document.getElementById("response-img");
let responseText = document.getElementById("response-text");
let greeting = document.getElementById("greeting");

// Display greeting
userName
	? (greeting.innerText = `Hello, ${userName}!`)
	: (greeting.innerText = "Hello Stranger!");

function shakeMagic8Ball() {
	// Add shake animation
	responseImg.classList.add("shake");
	setTimeout(() => {
		responseImg.classList.remove("shake");
	}, 1000);

	// Get user question
	let userQuestion = prompt("What do you want to ask the 8 Ball?");
	if (!userQuestion) {
		alert("Please ask a question.");
		return;
	}

	// Generate random response
	let randomNumber = Math.floor(Math.random() * 8);
	let eightBall = "";
	let imageChoice = "";

	switch (randomNumber) {
		case 0:
			eightBall = "It is certain.";
			imageChoice = "images/ITISCERTAIN.gif";
			break;
		case 1:
			eightBall = "It is decidedly so.";
			imageChoice = "images/ITISDECIDEDLYSO.gif";
			break;
		case 2:
			eightBall = "Reply hazy try again.";
			imageChoice = "images/REPLYHAZY.gif";
			break;
		case 3:
			eightBall = "Cannot predict now.";
			imageChoice = "images/CANNOTPREDICTNOW.gif";
			break;
		case 4:
			eightBall = "Do not count on it.";
			imageChoice = "images/DONTCOUNTONIT.gif";
			break;
		case 5:
			eightBall = "My sources say no.";
			imageChoice = "images/MYSOURCESSAYNO.gif";
			break;
		case 6:
			eightBall = "Outlook not so good.";
			imageChoice = "images/OUTLOOKNOTSOGOOD.gif";
			break;
		case 7:
			eightBall = "Signs point to yes.";
			imageChoice = "images/YES.gif";
			break;
	}

	console.log(`The Magic 8 Ball says: ${eightBall}`);

	responseText.innerText = `${userName} asked: "${userQuestion}". The 8 Ball says: "${eightBall}"!`;
	responseImg.src = imageChoice;
}