var  num = prompt("Enter any number");

num = parseInt(num);

var f1=0, f2=1, f3;
var next=1;
if(isNaN(num)){

console.log("Please enter a valid number");

}

else{
console.log("The FibonacciSeries is as follows");
console.log(f1);
console.log(f2);
for(var i = 2; i < num; i++){

f3 = f1 + f2;
console.log(f3);
f1 = f2;
f2=f3;

}

}

