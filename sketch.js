let video;

function preload(){
  cave = loadImage("images/tv3.jpeg")
}

function setup() {
  createCanvas(800, 800);

  // Define the size of the video
  videoWidth = 143; // You can change this value to adjust the width of the video
  videoHeight = 100; // You can change this value to adjust the height of the video

  video = createCapture(VIDEO);
  video.size(videoWidth, videoHeight);

  // Calculate the position to center the video
  videoX = (width - video.width) / 2.49; // You can adjust this value to change the horizontal position of the video
  videoY = 260; // You can adjust this value to change the vertical position of the video

  video.hide(); 
}

function draw() {
  background(0);

  // Apply grayscale to the video
  video.loadPixels();
  for (let i = 0; i < video.pixels.length; i += 4) {
    let gray = (video.pixels[i] + video.pixels[i + 1] + video.pixels[i + 2]) / 3;
    video.pixels[i] = gray; // Set red channel to grayscale value
    video.pixels[i + 1] = gray; // Set green channel to grayscale value
    video.pixels[i + 2] = gray; // Set blue channel to grayscale value
  }
  video.updatePixels();

  // Draw the webcam video
  image(video, videoX, videoY, videoWidth, videoHeight);
  
  // Draw the background image
  image(cave, 200, 200);

  // Pixelate the video
  let pixelSize = 4; //the level of pixelation
  video.loadPixels();
  noStroke();
  for (let y = 0; y < video.height; y += pixelSize) {
    for (let x = 0; x < video.width; x += pixelSize) {
      let pos = (x + y * video.width) * 4;
      let gray = video.pixels[pos];
      fill(gray);
      rect(x + videoX, y + videoY, pixelSize * 2, pixelSize * 2); // Adjust position for the video
    }
  }

  fill(255);
  text('darling... the television', 360, 540);
  text('is staring at me...', 375, 560);
}

