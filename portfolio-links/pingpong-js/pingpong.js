 function pingpong() {
 	var userNumber = document.getElementById("userNumber").value;

		 if (userNumber >= 10 && userNumber <= 100) {
		 	for (var i = 1; i <= userNumber; i++) {
		 		var createList = document.getElementById('list');
		 		var word = '';

		 		if ( (i % 3 == 0) && (i % 5 == 0) ) {
		 			word = 'Ping-Pong!';
		 		} else if (i % 5 == 0) {
		 			word = 'Pong';
		 		} else if (i % 3 == 0) {
		 			word = 'Ping';
		 		} else {
		 			word = i;
		 		}
		 		createList.innerHTML = createList.innerHTML + '<p>' + word + '</p>';
		 	}
	} else {
		alert("I said choose a number between 10 - 100! Why did you choose " + userNumber + "? Please try again, silly!");
	}
}







