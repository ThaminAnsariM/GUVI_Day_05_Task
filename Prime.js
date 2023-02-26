//anonymous function

var ar = [1,2,3,4,5,6,7,8,9,10];


let isprimenum = function (num){
    let arr=[];
    for(var i=0;i<num.length;i++){    
        let count = 0;
        for (j=2;j<num[i];j++){
            if(num[i]%j===0){
                count++
            }
        }
        if (count===0 && num[i] > 1){
            arr.push(num[i]);
        }
    }
    return arr;
}

console.log(isprimenum(ar));

//IIFE function


let isprime1 = (function(num){
    let arr1 = [];
    for(var i=0;i<num.length;i++){
        let count = 0;
        for(let j=2;j<num[i];j++){
            if(num[i]%j===0){
                count++;
            }
        }
        if(count===0 && num[i]>1){
            arr1.push(num[i]);
        }
    }
    return arr1;
})(ar)

console.log(isprime1);


//arrow function

var isprime2 = (num)=>{
    let arr2 = [];
    for (var i=0;i<num.length;i++){
        let count=0;
        for (var j=2;j<num[i];j++){
            if(num[i]%j===0){
                count++;
            }
        }
        if(count===0 && num[i]>1){
            arr2.push(num[i]);
        }
    }
    return arr2;
}
console.log(isprime2(ar));