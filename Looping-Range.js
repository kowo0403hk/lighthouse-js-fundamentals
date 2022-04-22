const range = function (start, end, step){
  const outputArr = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0){
    console.log(outputArr);
  } else {
    let accNum = start; //a variable to store accumulated number plus steps, so that it could be pushed to the array
    outputArr.push(start) //the starting point of the array
    for (let i = start; (i + step) <= end; i += step){ 
    //(i + step) <= end is to make sure that the loop will stop when i < end but output will exceed end number
      accNum += step;
      outputArr.push(accNum);
    };
  }
  return outputArr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));