function deepEqual(value, reference) {
  // console.log(Object.keys(value));
  // console.log(Object.keys(reference));

  if ((typeof value == "object" && value != null) && (typeof reference == "object" && reference != null)) {
    if (value.length == reference.length) {
      let string1 = "";
      let string2= "";
      for(key of Object.keys(value)){
        string1 = string1+key;
      }
      for(key of Object.keys(reference)){
        string2 = string2+key;
      }
      if (string1 == string2) {
        let string3 = "";
        let string4= "";
        for(value of Object.values(value)){
          string3 = string3+String(value);
        }
        for(key of Object.values(reference)){
          string4 = string4+String(reference);
        }
  
        if(string3 == string4){
          return true;
        }
      }


      // if((Object.keys(value) == Object.keys(reference))){
      //   if(Object.values(value) == Object.values(reference)){
      //     return true;
      //   }
      // }
      // else {
      //   return false;
      // }
    }
    else {
      return false;
    }
  }
  else if(value==reference) {
    return true;
  }
  else{
    return false;
  }
}





// tests
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
