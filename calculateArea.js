const calculateRectangleArea = function (length, width) {
  if (length < 0 || width < 0) {
    console.log("undefined")
  }
  else return length * width
}

const calculateTriangleArea = function (base, height) {
  if (base < 0 || height < 0) {
    console.log("undefined")
  }
  else return base * height / 2
}

const calculateCircleArea = function (radius) {
  if (radius < 0) {
    console.log("undefined")
  }
  else return Math.PI * radius * radius
}

console.log(calculateCircleArea(10));