let val1 = [7,1,2,8,0];
let val2 = [4,5,6,4,9];

// anonymous function
var median = function (arr1,arr2){
let merged = arr1.concat(arr2);
merged.sort();

let median;
const length = merged.length;
if (length % 2 === 0) {
  median = (merged[length/2 - 1] + merged[length/2]) / 2;
} else {
  median = merged[(length-1)/2];
}
return median;
}

console.log(median(val1,val2));

// //IIFE function
var median1 = (function(arr1, arr2) {
    let merged = arr1.concat(arr2);
    merged.sort();

    let median;
    let l = merged.length;
    if (l % 2 === 0) {
        median = (merged[l/2 - 1] + merged[l/2]) / 2;
    } else {
        median = merged[(l-1)/2];
    }
    return median;
})(val1, val2); 

console.log(median1);
