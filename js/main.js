function setup () {
createCanvas(innerWidth, innerHeight)
background(255)
}

function draw () {
  let x = mouseX
  let y = mouseY
  let d = width / 18
  let r = map(mouseX, 0, width, 0, 255)
  fill(r, 0, 0)
  if (mouseIsPressed) {
    ellipse(x, y, d)
  }
}
