function reverseArray(arr) {
  let newArray =[];
  for(arrItem of arr){
    newArray.unshift(arrItem);
  }
  return newArray;
}

function reverseArrayInPlace(arr) {
  // for(arrItem of arr){
  //   arr.push(arr[arr.length -1]);
  //   arr.pop();
  // }
  // return arr;
  let newArray =[];
  for(arrItem of arr){
    newArray.unshift(arrItem);
  }
  return newArray;
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
arrayValue = reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]