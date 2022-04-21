function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}


function buildTriangle(length){
  let triangle = "";
  let lineNum = 1;
  for (lineNum = 1; lineNum <= length; lineNum++) {
      // call the makeLine function and store them into triangle variable
      // use lineNum variable inside the makeLine function to make sure every line is with 1 incremental
      triangle += makeLine(lineNum)
      
  }
  return triangle;
}

console.log(buildTriangle(10));