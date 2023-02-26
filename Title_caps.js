
//anonymous function
let up =function (string) {
    let sentence = string.toLowerCase().split(" ");
    for (let i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(" ");
  }
  
  console.log(up("this is the proper e-commerce"));
  
//IIFE function

let up1 = (function (string) {
    let sentence = string.toLowerCase().split(" ");
    for (let i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(" ");
  })("this is the proper e-commerce")

  console.log(up1);

  // Arrow function;

  let up2 = (string) => {
    let sentence = string.toLowerCase().split(" ");
    for (let i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(" ");
  }
  console.log(up2("this is the proper e-commerce"));
  