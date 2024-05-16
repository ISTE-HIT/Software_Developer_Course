//  WAP to check even number in JS

var count = 0
var arr = [1,2,3,54,6,8,5,2,45]
var len = arr.length
for (var i=0;i<len;i++){
    if (arr[i]%2==0){
        count++;
    }
}
console.log("Number of Even number is "+count)
