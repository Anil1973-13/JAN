var obj = {
    "first_name": "Aayush",
    "last_name": "Sinha",
    "email": "aayush.aryan@me.com",
    "website": "sdfhsdhfjds",
    "k": "This is Key K's value",
    "students": [
	{
	    "name": "Name 1",
	    "marks": 15
	},
	{
	    "name": "Name 2",
	    "marks": 17
	},
	{
	    "name": "Name 3",
	    "marks": 19
	},
	{
	    "name": "Name 4",
	    "marks": 21
	},
	{
	    "name": "Name 5",
	    "marks": 0
	},
        {
	    "name": "Name 6",
	    "marks": 27
	},
    ],
};

var chk = prompt("Enter a Number");
chk = parseInt(chk);

var len = obj.students.length;
if(isNaN(chk)){

alert("Enter a valid number");

}

else{
var c = 0, k = 0;
while(c<len){
var ch = obj.students[c];
c++;
if(ch.marks>=chk)
{
k++;
console.log("Name : "+ ch.name+"\n");
console.log("Marks : "+ ch.marks+"\n");

}

}

}

if(k==0){

console.log("There are no students getting marks more than"+ " "+chk);

}