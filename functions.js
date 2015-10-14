// SOME FUNCTIONS AND LOOPS

// WHILE LOOP - COUNTDOWN
var x = 10;
while (x > 0) {
	console.log(x);
	x--;
}
console.log("Blast Off!!!!"); 


// WHILE LOOP - GEORGE EATS PIZZA
var x = 1;
while ( x <= 8) {
	console.log("George eats " + x + " slices of pizza");
	x++;
}
console.log("no more pizza :(");


// IF LOOP - SIGHT AND SOUND
 var movies = ["Vertigo", "Citizen Kane", "The Godfather", "2001: A Space Odyssey"];
 for (var i = 0; i < movies.length; i++) {
 	console.log(movies[i] + " is ranked " + (i + 1) + " in the Sight and Sound poll.");
 } 


// FUNCTION - TAXES
function taxes(income, rate) {
alert("YOU OWE $" + (income * rate).toFixed(2) + "!!!!");
}

taxes(3893, .31); 


// FUNCTION - KITTY IS...
function kittyis(string) {
	alert("Kitty is " + string + "!!!!!");
}
kittyis("angry");

 

 // FUNCTION - BIRTHDAY
 function birthday(name, month, date, year) {
 	alert(name + " was born on " + month + " " + date + ", " + year + "!");
 }

 birthday("George", "July", "4th", 1976);


// FUNCTION - GEORGE'S CASUALTIES
 function george(eaten, paralyzed) {
 	alert("George ate " + eaten + " people and paralyzed " + paralyzed + ".");
 }
 george(10, 20); 





 






