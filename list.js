function arrayToList(arr) {
  let list={};
  for (let i = arr.length-1; i >= 0; i--) {
    if (i == arr.length-1) {
      list = {value: arr[i], rest: null};
    }
    else{
      list = {value: arr[i], rest: list};
    }
  }
  return list;
}
function listToArray(list, arr) {
  let newArray=[];
  for (let node = list; node; node = node.rest) {
    newArray.push(node.value)
  }
  return newArray;
}
function prepend (obj1st, obj2nd){
  let list = {value: obj1st, rest: obj2nd};
  return list;
}
function nth(list, index){
  let newArray=[];
  for (let node = list; node; node = node.rest) {
    newArray.push(node.value)
  }
  return newArray[index];
}

// tests
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
