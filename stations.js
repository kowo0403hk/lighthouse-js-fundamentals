const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Codeville Epic Academy', 15, 'school'],
  ['Big Al Pizza', 50, 'school']
]

//the function should return stations name which contains a capacity of at least 20, and be a school or community centre

//use for...of loop to loop through the loops inside the loop

const chooseStations = function (stations){
  const goodStation =[];
  for(const station of stations){
    const capacity = station[1];
    const type = station[2];
    if((capacity >= 20) && (type === 'school' || type === 'community centre')){
      goodStation.push(station[0]);
    };
  };
  return goodStation;
}

console.log(chooseStations(stations));