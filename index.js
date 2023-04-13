let arr = [12,45,23,32,56,3,4,5,31,53,89,63]

// even and odd

let res = [];
let res1 = [];
for(let i=0; i<arr.length ;i++){
    if(arr[i] % 2 == 0){
        res.push(arr[i]);
    }
    else{
        res1.push(arr[i]);
    }
}
// console.log(res1, res);

let max = -Infinity;
for(let i=0; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
}
// console.log(max);
console.log(typeof(let))