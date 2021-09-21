function hasEnoughPlayers() {
  if (team.length >= 7) {
    console.log("true")
  } else if (team.length < 7) {
    console.log("false")
  }
}
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

console.log(hasEnoughPlayers(team));
