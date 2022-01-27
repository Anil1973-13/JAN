var n = prompt("Enter the length of the array");
var arr = [];
for(var i=0; i<n; i++){
arr.push(prompt("Enter the value at index:"+" "+ i));
}

var max = arr[0];

for(var i = 1; i<n; i++){
if(arr[i]>arr[i-1]){

max = arr[i];

}



}
console.log("The max Element in the array is"+" "+ max);