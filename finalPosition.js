const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']



const finalPosition = function (directions){
  const coordinate = [];
  let x = 0;
  let y = 0;
  for (const face of directions){
    if (face === 'east'){
      x++;
    } else if (face === 'west'){
      x--;
    } else if (face === 'north'){
      y++;
    } else if (face === 'south'){
      y--;
    }
  }
  coordinate.push(x, y);
  return coordinate;
}

console.log(finalPosition(moves));