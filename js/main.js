function setup () {
createCanvas(innerWidth, innerHeight)
background(255)
}

function draw () {
  let x = mouseX//width / 2
  let y = mouseY //height / 2
  let d = width / 18
// val, minVal, maxVal, newMin, newMax
  let r = map(mouseX, 0, width, 0, 255)
  fill(r, 0, 0)
  if (mouseIsPressed) {
    ellipse(x, y, d)
  }

}
