
let words = ["hello","level",12321,"world","deified",45654,"racecar","12321"];

//anonymous function

var palindrom = function(arr){
    let pal =[];
    for (var i=0;i<arr.length;i++){
    var temp = arr[i];
    if(temp===temp.toString().split("").reverse().join("")){
        pal.push(temp);
    }
    }
    return pal;
  };
 console.log(palindrom(words));

 //IIFE function

 var palindrom1 =(function(arr){
    let pal = [];
    for (var i=0;i<arr.length;i++){
        var temp =arr[i];
        if (temp ===temp.toString().split("").reverse().join("")){
            pal.push(temp)
        }
    }
    return pal;
 })(words)
 console.log(palindrom1)

 //arrow function

 let palindrom2 = (arr)=>{
    let pal = [];
    for (var i=0;i<arr.length;i++){
        var temp =arr[i];
        if (temp ===temp.toString().split("").reverse().join("")){
            pal.push(temp)
        }
    }
    return pal;
 }
 console.log(palindrom2(words));