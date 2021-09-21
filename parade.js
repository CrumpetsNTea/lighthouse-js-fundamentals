
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'] //the directed moves of the parade

const finalPosition = function (moves) { //so the variable finalPosition is a function that calculates the parades movement
  let x = 0 //translates the x axis into the coordinates
  let y = 0 // translates the y axis into coordinates

  for (let i = 0; i < moves.length; i++) { //start of loop that takes the input and translates it into the moves on the x and y axis
    if (moves[i] === 'north') {
      y++
    } else if (moves[i] === 'south') {
      y--
    } else if (moves[i] === 'west') {
      x--
    } else if (moves[i] === 'east') {
      x++
    }
  }
  return [x, y] //returns the x and y coordinates
}


console.log(finalPosition(moves)); //tells us the final position with the argument of the moves variable