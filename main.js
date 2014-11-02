var messages = ["Yes", "No", "Probably", "You Decide!", "I don't Know!", "no comment", "Maybe after a haircut.", "Ask again later.", "Try again", "404: Answer Not Found", ":(", "Hmm...", "I give up!", "I can't figure it out!", "8", "The cake is a lie."];
var chosenMessage;

var flag = false;

var button = document.getElementById('awesome-button');
var buttonText = document.querySelector('#awesome-button h1');
button.addEventListener('click', function(){
	if(!flag){
		flag = true;
		chosenMessage = messages[Math.floor(Math.random()*messages.length)];
		buttonText.innerHTML = "&bull;";
		setTimeout(function(){
			buttonText.innerHTML = "&bull;&bull;";
			setTimeout(function(){
				buttonText.innerHTML = "&bull;&bull;&bull;";
				setTimeout(function(){
					buttonText.innerHTML = chosenMessage;
					if(chosenMessage = messages[14]) messages[14] += "8";
					flag = false;
				}, 500);
			}, 500);
		}, 500);
	}
});
