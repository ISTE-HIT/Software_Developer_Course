let array=[1,2,3,4,5,6,7,8,9]
let count=0;

for(let i=0;i<array.length;i++) {
    if(array[i]%2==0){
        count ++;
    }
}
console.log("Total even numbers are= " +count);
