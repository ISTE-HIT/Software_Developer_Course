//program to check even numbers in array using Js
let arr = [4,5,9,8,34,21,45];     //predifined array
console.log("Array =", arr);
console.log("The even numbers are :");
for(let i = 0; i< arr.length;i++){
    if(arr[i]%2 === 0)
        console.log(arr[i]);
}