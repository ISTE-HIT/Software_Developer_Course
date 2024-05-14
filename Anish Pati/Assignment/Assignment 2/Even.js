var arr =prompt("Enter Numbers:") ;
var count=0;
for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        count++;
    }
}
console.log("Number Of Even Numbers are:"+count);    