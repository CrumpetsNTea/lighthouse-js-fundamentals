const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Codeville Epic Academcy', 15, 'school'],
  ['Big Al PIzza', 50, 'restaurant']
];

// so we need to run through the list to figure out the good stations for polling
function chooseStations(stations) {
  const goodStations = []
  for (const station of stations) {      //going through each station out of all of the stations
    // to make sure it is working correctly we make a console.log/
    // need to check capacity - therefore we need to use an index of the array which is the 1 index

    const capacity = station[1] //pulls the capacity from the list of arrays

    if (capacity >= 20) { //if capacity is less than or equal to 20 then it's good

      const type = station[2] // if type of place is either school or cc it is good
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0]) // if the places pass these two criteria, the name of the place is pushed to the variable goodStations
      }
    }
  }

  return goodStations // we then get the program to return the goodStations in the format of an array
}
console.log(chooseStations(stations)) // the goodStations are then pushed to the console