var colors=["black","blue","brown","cyan","green","orange","pink","purple","red","white","yellow"];
function do_game()
{
	var index=Math.floor(Math.random()*(colors.length));
	var color=colors[index-1];
	console.log(color);
	var guess;
	var finished=false;
	var count=0;
	alert("Hello!");

	while(!finished)
	{
		guess=prompt("Guess a color from the list: \n\nblack,blue,brown,cyan,green,orange,pink,purple,red,white,yellow").toLowerCase();
		count++;
		finished=check(guess,color);
		if(finished)
			alert("Congratulations!You have guessed it right!It took you "+count+" guesses to guess the exact colour.");
	}
}
	function check(guess,color)
	{
		if(colors.indexOf(guess)<0)
		{
			alert("Oops!I don't recognize your colour. Choose another colour");
			return false;
		}
		else if(guess<color) {
			alert("Sorry, your guess is not correct!\n\nHint: Your color is alphabetically lower than mine.\n\nPlease try again.");
			return false;
		}
		else if(guess>color) {
			alert("Sorry, your guess is not correct!\n\nHint: Your color is alphabetically higher than mine.\n\nPlease try again.");
			return false;
		}
		else
			return true;
	}


