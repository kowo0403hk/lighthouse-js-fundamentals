const ageCalculator = function (name, yearOfBirth, currenYear){
  let age = currenYear - yearOfBirth;
  return `${name} is ${age} years old.`;
}

console.log(ageCalculator("Alex", 1989, 2022));