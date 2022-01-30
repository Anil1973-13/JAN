var string = prompt("Input any string");

string = string.toUpperCase();
var s = string.split("");

console.log(s);

var count = 0;

for(var i = 0; i < s.length; i++)
{

switch(s[i])
{

case "A":
	++count;
	break;

case  "E":
	++count;
	break;

case  "I":
	++count;
	break;

case  "O":
	++count;
	break;

case "U":
	++count;
	break;
}


}

console.log("Total number of vowels present in the string are"+ " "+count);