const lastIndexOf = function (array, num){
  let match = false; //variable that works as a on and off switch
  let position = 0; //used to return the index position
  for (let i = array.length - 1; i >= 0; i--){ //counting backward
    if (array[i] === num){
      position = i;
      match = true;
      break; //to jump out of loop once it's hit
    }
  }
  if (match === true){
    return position;
  } else {
    return -1
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);