let video;

function preload(){
  cave = loadImage("images/tv3.jpeg")
}

function setup() {
  createCanvas(800, 800);

  videoWidth = 143; 
  videoHeight = 100; 

  video = createCapture(VIDEO);
  video.size(videoWidth, videoHeight);

  videoX = (width - video.width) / 2.49; 
  videoY = 260; 
  video.hide(); 
}

function draw() {
  background(0);

  video.loadPixels();
  for (let i = 0; i < video.pixels.length; i += 4) {
    let gray = (video.pixels[i] + video.pixels[i + 1] + video.pixels[i + 2]) / 3;
    video.pixels[i] = gray; 
    video.pixels[i + 1] = gray; 
    video.pixels[i + 2] = gray; 
  }
  video.updatePixels();

  image(video, videoX, videoY, videoWidth, videoHeight);
  
  image(cave, 200, 200);

  let pixelSize = 4;
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

