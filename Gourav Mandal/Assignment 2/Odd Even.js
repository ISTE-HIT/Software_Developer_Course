// WAP to count number of even and odd numbers. 

let odd=0 ,even =0 ;
let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for( var i=0;i<arr.length;i++){
  if(arr[i]%2==0){
    even++;

  }
  else{
    odd++;
  }
}
console.log("Number of Odd numbers"+ odd);
console.log("Number of Odd numbers"+ even);