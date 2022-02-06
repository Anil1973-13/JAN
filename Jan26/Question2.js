/*var ch = prompt("Enter a Character");
ch = ch.toUpperCase();


if(ch == 'A' || ch =='E' || ch =='I' || ch =='O' || ch =='U'){
alert("Ch is Vowel");
}
else{

alert("Ch is Consonant");
}
*/
var ch = prompt("Enter a Character");
ch = ch.toUpperCase();

if(ch>='A' && ch<='Z'){
if(ch == 'A' || ch =='E' || ch =='I' || ch =='O' || ch =='U'){
alert("Ch is Vowel");
}
else{

alert("Ch is Consonant");
}
}
else{

alert("Ch is neither vowel nor consonant");
}