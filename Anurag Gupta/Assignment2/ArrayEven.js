//  WAP to count number of even number in given array.

var arr = [1,7,34,57,90,3]
var count=0;
for (var i=0;i<arr.length;i++){
    if (arr[i]%2==0){
        count++;
    }
}
console.log("Number of Even number is "+count);
