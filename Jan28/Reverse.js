var num = prompt("Enter any Number");

num = parseInt(num);
if(isNaN(num)){
alert("Enter a valid Number");
}
else{
console.log("The numbers in the reverse order");

do{
console.log(num);

num--;
}
while(num>0);
}