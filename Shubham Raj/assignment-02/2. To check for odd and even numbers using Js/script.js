let odd_count = 0, even_count = 0;

let arr = [1,2,5,44,71,7,22,58,77,101,404];

arr.forEach((x)=>{
    if (x%2 == 0) {
        even_count++;
    }

    else{
        odd_count++;
    }
})

console.log("THE NO. OF ODD NUMBERS IS = " + odd_count);
console.log("THE NO. OF EVEN NUMBERS IS = " + even_count);