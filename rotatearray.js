let v = [1,2,3,4,6,7,8,9,10];

//anonymous function

let rotation = function(arr,k){
    let rotationindex = arr.length - k;

    const firstpart = arr.slice(rotationindex);
    const secondpart = arr.slice(0,rotationindex);

    return firstpart.concat(secondpart);
}
console.log(rotation(v,8));

//IFFE function

let rotation1 = (function(arr,k){
    let rotationofindex = arr.length - k;

    const firstpart = arr.slice(rotationofindex);
    const secondpart = arr.slice(0,rotationofindex);

    return firstpart.concat(secondpart);
})
console.log(rotation1(v,5));