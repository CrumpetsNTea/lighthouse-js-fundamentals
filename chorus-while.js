const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

const ending = "Let's dance!";
let loop = 0;
while (loop < 10) {
  if (loop === 5) {
    console.log("*change key*");
  }
  console.log(ending);
  loop++;
}
console.log("Until the sun comes up!");