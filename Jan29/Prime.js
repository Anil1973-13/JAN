var num = prompt("Enter any number");

num = parseInt(num);
var num1 = 2;

if(isNaN(num)){
alert("Enter a valid number");
console.log("Enter a valid number");
}
else{

var flag = 0;
for(var i = 2; i <= num/2; ++i)
{
if(num % i == 0)
{
flag = 1;
break;
}
}
}
if (flag == 1){
console.log("Given number"+" " + num+" "+"is not prime ");

}
else{
console.log("Given number"+" " + num+" "+"is  a prime ");
}