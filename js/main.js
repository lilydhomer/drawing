
//create ellipse:
  //function setup () {
  //   createCanvas(400, 400);
  //   function draw() {
  //   background(220);
  //   ellipse(100, 100, 200);
  // }

//create ellipse:
  //function setup () {
  // createCanvas(innerWidth, innerHeight)
  // background(100, 100, 200, 100)
  // let x = width / 2
  // let y = height / 2
  // let d = width / 4
  // fill(200, 100, 255)
  // strokeWeight(0)
  //   ellipse(x, y, d/2)
  // }

//create new color of ellipse on each load
  //function setup() {
//   createCanvas(innerWidth, innerHeight)
//   background(100, 100, 200, 100)
//   let x = random(0, width)
//   let y = random(0, height)
//   let d = width / 4
//
//   let r = random(255)
//   let g = random(255)
//   let b = random(255)
//   fill(r, g, b)
//   strokeWeight(0)
//   ellipse(x, y, d)
// }

//create 100 ellipses on page load:
// function setup () {
// createCanvas(innerWidth, innerHeight)
// background(100, 100, 200, 100)
//
// for (let i = 0; i < 100; i++) {
//   let x = random(0, width)
//   let y = random(0, height)
//   let d = width / 4
//
//   let r = random(255)
//   let g = random(255)
//   let b = random(255)
//   fill(r, g, b)
//   strokeWeight(0)
//   ellipse(x, y, d)
//   }
// }


//create circles on mouse move
// function setup () {
// createCanvas(innerWidth, innerHeight)
// background(0)
// }
//
// function mouseMoved () {
//     let x = random(0, width)
//     let y = random(0, height)
//     let d = width / 4
//     ellipse(x, y, d)
// }


// //create circles that follow the mouse and map color to mouse position
// function setup () {
// createCanvas(innerWidth, innerHeight)
// background(100)
// }
//
// function mouseMoved () {
//     let x = mouseX
//     let y = mouseY
//     let d = width / 8
//       // val, minVal, maxVal, newMin, newMax
//     let r = map(mouseX, 0, width, 0, 255)
//     fill(r, 0, 0)
//     ellipse(x, y, d)
// }

//create circles that follow the mouse on click
function setup () {
createCanvas(innerWidth, innerHeight)
background(100)
}

function draw () {
  let x = mouseX//width / 2
  let y = mouseY //height / 2
  let d = width / 18

  if (mouseIsPressed) {
    ellipse(x, y, d)
  }

}


// //generative ellipse bouncing
// let x = innerWidth / 2
// let y = innerHeight / 2
// let dy = 2
// let dx = 2
//
// function setup () {
// createCanvas(innerWidth, innerHeight)
//   background(0)
// }
//
// function draw () {
//   background(255, 255, 255, 10)
//   let d = width / 8
//   let r = d/2
//   x += dx
//   y += dy
//
//   if (y > height - r || y < 0 + r) {
//     dy = -dy
//   }
//
//   if (x > width - r || x < 0 + r) {
//     dx = -dx
//   }
//
//   ellipse(x, y, d)
//
// }

// //create circle based on sin and cos
// let total = 100
//
// function setup () {
// createCanvas(innerWidth, innerHeight)
//   background(0)
//
//   for (let i = 0; i < total; i++) {
//     let offsetX = width / 2
//     let offsetY = height / 2
//     let radius = 100
//     let x = sin(i * 0.25) * radius + offsetX
//     let y = cos(i * 0.25) * radius + offsetY
//     let d = 50
//     ellipse(x, y, d)
// }
// }


// //animate ellipse moving in a circle
// let total = 100
// let i = 0
//
// function setup () {
// createCanvas(innerWidth, innerHeight)
//   background(0)
// }
// function draw () {
//     background(0)
//     //i ++
//     i += 0.1
//     let offsetX = width / 2
//     let offsetY = height / 2
//     let radius = 100
//     let x = sin(i * 0.25) * radius + offsetX
//     let y = cos(i * 0.25) * radius + offsetY
//     let d = 30
//     ellipse(x, y, d)
// }

// //animated ellipse in a spiral
// let total = 100
// let i = 0
// let radius = 0
// function setup () {
// createCanvas(innerWidth, innerHeight)
//   background(0)
// }
// function draw () {
//     background(0, 0, 0, 10)
//     //i ++
//     i += 1
//     //radius ++
//     radius += 0.25
//     let offsetX = width / 2
//     let offsetY = height / 2
//     let x = sin(i * 0.25) * radius + offsetX
//     let y = cos(i * 0.25) * radius + offsetY
//     let d = 30
//     ellipse(x, y, d)
// }

// //animated lissajous curve
// let total = 100
// let i = 0
// let radius = 200
// let d = 30
//
// function setup () {
// createCanvas(innerWidth, innerHeight)
//   background(0)
// }
//
// function draw () {
//     background(0)
//     i += 0.25
//     let offsetX = width / 2
//     let offsetY = height / 2
//     let x = sin(i * 0.25) * radius + offsetX
//     let y = cos(i * 0.55) * radius + offsetY
//     let d = 30
//     ellipse(x, y, d)
// }


// let d = 100
// let total = 100
// let xs = []
// let ys = []
// let dxs = []
// let dys = []

//let circles = ['a', 'b']
// circles[0] // 'a'
// circles[1] // 'b'
// circles.push('c')
// circles[2] // 'c'

// function setup () {
// createCanvas(innerWidth, innerHeight)
//   background(0)
//
//   for (let i = 0; i < total; i++) {
//     // xs.push(innerWidth / 2)
//     xs.push(random(0, width))
//     ys.push(innerHeight / 2)
//     dxs.push(random(-2, 2))
//     dys.push(random(-2, 2))
// }
// }
  // let x1 = 200
  // let y1 = 300
  // let x2 = 250
  // let y2 = 250
  //ellipse(x1, y1, d)
  //ellipse(x2, y2, d)





// function drawOverlaps (x, y) {
//   stroke(random(100,255))
//   for (let i = 0; i < total; i++) {
//   let distance = dist(x, y, xs[i], ys[i])
//   if (distance < d && distance !== 0) {
//     line(x, y, xs[i], ys[i])
// }
// }
// }
// function draw () {
//     background(0, 0, 0, 10)
//
//       for (let i = 0; i < total; i++) {
//         //xs[i] += dxs[i]
//         ys[i] += dys[i]
//         //ellipse(xs[i], ys[i], d)
//         drawOverlaps(xs[i], ys[i])
//     }
// }
