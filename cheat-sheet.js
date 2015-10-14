// JAVASCRIPT CHEAT SHEET
--------------------------------------------------
// TO LINK TO AN EXTERNAL JAVASCRIPT SHEET:

<script src="example.js"></script>
--------------------------------------------------
// COMMENTS ARE VERY IMPORTANT:

// single line comment

/* multi-line comment for 
prolix programmers */
---------------------------------------------------
// THREE WAYS TO SEE OUTPUT OF SCRIPT:

1 -  log to console
     ex: console.log("output, here")

2 -  alert
     ex: alert("output, here")

3 -  output to HTML (complicated)
--------------------------------------------------
// DATA TYPES:

1 -  string - series of characters
     ex: "charlie brown" , "5"

2 -  Number
     ex: 1, 2, 3, 3.5, 1000

3 -  Boolean
     ex: true, false

4 -  undefined (no value)
-----------------------------------------------------
/* VARIABLES - CONTAINERS FOR VALUES; CAN BE ANY DATA TYPE. A VARIABLE MUST BE:
 DECLARED AND THEN ASSIGNED */

ex: var x,
   x = 2;
   or
   var x = 2;

// Once declared, value of variable can be changed
   x = 3; //using variable from above
   console.log(x);
   > 3
------------------------------------------------------
// BASIC MATH 

ex: 1 + 1;
    > 2

    x * 2; //using variable from above
    > 6
------------------------------------------------------    
// STRING CONCATENATION (CONNECTION)

ex: "to be" + " or not to be";
    > to be or not to be
------------------------------------------------------
// ARRAYS - HOLD COLLECTIONS OF DATA (ANY TYPE)  

ex: ["Jason", "Hans", "George"] // strings
ex: [1, 2, 3, 4, 5] // numbers
ex: [1, 2, "Jason", 3, 4, true] //multiple data types

// AN ARRAY CAN BE STORED IN A VARIABLE
ex: var names = ["Jason", "Hans", "George"];

/* AN INDEX OF AN ITEM INSIDE ITS ARRAY IS ITS NUMBERED POSITION. 
"0" IS FIRST, "1" IS SECOND, ETC.
USE BRACKET NOTATION TO RETRIEVE AN ITEM FROM AN ARRAY */

ex. console.log(names[0]);
    > Jason
    console.log(names[1]);
    > Hans
    console.log(names[2]);
    > George

// AN ARRAY CAN STORE OTHER ARRAYS
ex. var nfc east = ["Giants", "Cowboys", "Eagles", "Redskins"];
    var nfc west = ["Cardinals", "49ers", "Seahawks", "Rams"];
    var nfc north = ["Bears", "Vikings", "Packers", "Lions"];
    var nfc south = ["Saints", "Falcons", "Panthers", "Buccaneers"];

    var nfc = [nfc east, nfc west, nfc north, nfc south];

    console.log(nfc[1][1]);
    > "49ers"
------------------------------------------------------------------
// OBJECTS CONTAIN KEY-VALUE PAIRS (SHOULD BE WRITTEN IN MULTIPLE LINES FOR READABILITY)
ex: var student = { 
	first: "Jason", 
	last: "Maran" 
  };
    
    console.log(student["first"]);
    > "Jason"
    or
    console.log(student.first);
    > "Jason"
-----------------------------------------------------------------
 /* VALUE COMPARISON RETURNS A BOOLEAN (TRUE OR FALSE);
    TYPES OF COMPARISON OPERATORS */

   == // "equal to" - (DO NOT USE) only compares value and not type
   === // "equal to" - recommended as compares value and type
   != // "not equal" - (DO NOT USE) only compares value and not type
   !== // "notequal to" - recommended as compares value and type
   > // "greater than"
   < // "less than"
   >= // "greater than or equal to"
   <= // "less than or equal to"
-----------------------------------------------------------------
// TYPES OF LOGICAL OPERATORS  

   && // "and"
   ex: var a = 1;
       var b = 2;
       (a < 3 && b >1);
       > true

   || // "or"
   ex: (a === 4 || b === 4);
       > false
   ex: (a === 1 or b ===3);
       > true

   ! // "not"
   ex: !(a === b);
       > true
---------------------------------------------------------
 // IF STATEMENT - CODE RUNS IF CONDITION IS TRUE

   ex: if (3>5) {
   	console.log("False, no output");
   }    

       if (3<5) {
    console.log("True");
   }
---------------------------------------------------------
 // ELSE STATEMENT - RUNS IF CONDITION IS FALSE

   ex: if (3>5) {
   	console.log("crazy, won't see");
   }
       else {
    console.log("not crazy, false");
       }
----------------------------------------------------------
 // ELSE-IF STATEMENT  

   ex: if (3>5) {
   	console.log("crazy, won't see");
   }
       else if (3 === 3) {
    console.log("This is the end, program done");
   }
       else {
    console.log("not crazy, false");
   }    
----------------------------------------------------------
/* FUNCTION - A PROCEDURE THAT PERFORMS A SPECIFIC ACTION;
   MUST BE DEFINED AND THEN CALLED */

   ex: function kittysays() {
   	 console.log("Meow");
   } //defined

      kittysays(); //called
------------------------------------------------------------
/* ARGUMENT - AN INPUT SPECIFIC TO THE FUNCTION 
   (CAN'T BE ACCESSED OUTSIDE OF FUNCTION) */

   ex: function kittysays(myString) {
   	   console.log(myString);
   }
       kittysays("MEOW!");

       console.log(myString);
       >error
------------------------------------------------------------
/* RETURN VALUES - TO ACCESS A VALUE OUTSIDE OF THE FUNCTION, 
   IT MUST BE RETURNED */

    ex: function multiply(number1, number2) {
    	var product = number1 * number2;
    	return product;
    }
        var myProduct = multiply(3, 6); //once a function, returns, its execution halts
-------------------------------------------------------------
// TWO USEFUL FUNCTIONS AND OPERATORS

// typeof - the type of the variable
   ex: var x = 2
       console.log(typeof x);
       > Number

// indexof - a particular value in an array
   ex: var names = ["Jason", "Hans"]  
       var namesposition = names.indexOf("Jason");

       console.log(namesposition);
       > 0
-------------------------------------------------------------
// OTHER OPERATORS (WILL KEEP ADDING TO THIS LIST)

      document.title // title of current document
      document.lastModified // date doc last modified
      document.URL // url of current doc
      document.domain // domain of current doc

      document.write() // writes text to doc
      document.getElementById() // returns element with the value of the id attribute
      document.createElement() // creates new element
      document.createTextNode() // creates new text node

      sample.toUpperCase() // makes uppercase
      sample.toLowerCase() // makes lowercase
      sample.replace() // replaces one value with another

      number.toFixed() // rounds to specified number of decimal place (returns a string)
      number.toPrecision() // rounds to a total number of places (returns a string)
      number.toExponential() // represents the number in exponential notation (returns a string)

      Math.PI // returns pi
      Math.round() // rounds to nearest integer
      Math.sqrt() // returns square root of positive number
      Math.ceil() // rounds up to nearest integer
      Math.floor() // rounds down to nearest integer
      Math.random() // generates a random number between 0 (inclusive) and 1 (not inclusive)

--------------------------------------------------------------
/* "FOR LOOP" - EXECUTES A SET NUMBER OF TIMES;
   USE ITERATOR VARIABLE - "I";
  I = 0 BEFORE FIRST ITERATION; I++ IS EQUIVALENT TO I=I+1 */

   ex: for (var i =0; i < 100; i++) {
  	console.log (i);
  }     

  > 0
  1
  ...
  99
-------------------------------------------------------------
// "WHILE LOOP" EXECUTES AS LONG AS CONDITION IS TRUE

   ex: var x = 50;
       while (x < 100) {
       	console.log ( x + " is kooky");
       	x++;
       }
  > 50 is kooky
  51 is kooky
  ...
  99 is kooky





