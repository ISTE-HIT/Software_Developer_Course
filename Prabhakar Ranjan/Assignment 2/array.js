// WAP to check even nos in an array using javascript

var count = 0
var arr = [1,5,2,6,3,7,8,9,4,16,18]
var lnt = arr.length
for (var i=0; i<lnt; i++){
    if (arr[i]%2==0){
        count++;
    }
}
console.log("The number of even nos is " + count)