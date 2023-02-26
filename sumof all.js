//anonymous 
let val =[1,2,3,4,5,5]
let sum =function (num) {
    let ans = 0;
    for (var i =0;i<num.length;i++){
        ans = ans+num[i];
    };
    return ans;
};
console.log(sum(val));


//IIFE Function

let sum1 = (function(num){
    let ans=0;
    for(var i=0;i<num.length;i++){
        ans = ans+num[i];
    }
    return ans;
})(val);
console.log(sum1);

//arrow function


let sum2 =(num) =>{
    let ans=0;
    for(var i=0;i<num.length;i++){
        ans = ans+num[i];
    }
    return ans;
};
console.log(sum2(val));