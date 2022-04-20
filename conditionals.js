const temperature = -1;

if (temperature < 0){
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15){
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you are ready to go outside");

//logical operators below
if (temperature < -40 || temperature > 40){
  console.log("Maybe going outside isn't such a good idea...");
}

let raining = true;

if (!raining){
  console.log("Leave your umbrella at home!");
}