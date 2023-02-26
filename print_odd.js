let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//anonymous function
var oddnum = function(arr) {
  let odds = arr.filter(n => n % 2);
  return odds;
}
console.log(oddnum(arr));

//IIFE function
(function() {
  let odds = arr.filter(n => n % 2);
  console.log(odds);
  return odds;
})();

//arrow function

let odd =(arr)=>{
    let odds = arr.filter(n=>n%2);
    return odds;
};
console.log(odd(arr));