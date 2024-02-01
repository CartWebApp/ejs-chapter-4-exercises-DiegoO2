function reverseArray(arr) {
  let newArray =[];
  for(arrItem of arr){
    newArray.unshift(arrItem);
  }
  return newArray;
}

function reverseArrayInPlace(arr) {
  const length = arr.length;
  let n =0;
  for(let i = 0; i < length; i++){
    arr.unshift("");
  }
  for(arrItem of arr){
      arr[n]=arr[arr.length -1];
      arr.pop();
      n++;
  }
  return arr;  
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
arrayValue = reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]