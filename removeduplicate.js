let a = [1, 2, 3, 2, 4, 1, 'a', 'b','a'];
//ananymous function

let removeduplicate = function(arr){
let uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);

return uniqueArr;
}
console.log(removeduplicate(a));

//IFFE function

let  removeduplicate1 =(function(arr){
    let uniqueArr = arr.filter((el,index)=>arr.indexOf(el)===index);

    return uniqueArr ;
})(a)
console.log(removeduplicate1);
