//Check even numbers in an array

var ar = [1, 5, 10, 8, 6, 7, 2, 3];
var even_ar = [];
console.log("Even numbers in the array are : ");
for (var i = 0; i < ar.length; i++) {
  if (ar[i] % 2 == 0) {
    even_ar.push(ar[i]);
  }
}
console.log(even_ar);
