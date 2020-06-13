let font;
let graphic;

function preload() {
  font = loadFont("assets/spacegrotesk-medium.otf");
}

function setup() {
  createCanvas(600, 600);

  graphic = createGraphics(600, 600);
  graphic.textSize(100);
  graphic.textFont(font);
  graphic.textAlign(CENTER, CENTER);
  graphic.fill("royalblue");

  graphic.text("david\ngoligorsky", 300, 240);
}

function draw() {
  background(0, 0, 200, 100);

  const gridNumber = 50;
  const tileSize = 600 / gridNumber;

  for (let x = 0; x < gridNumber; x++) {
    for (let y = 0; y < gridNumber; y++) {
      const distortion = sin(frameCount * 0.05 + x * 1 + y * 0.5) * 5;

      // source
      const sx = x * tileSize + distortion * 0.1 + (distortion * mouseX) / 1000;
      const sy = y * tileSize + distortion * 0.1 + (distortion * mouseY) / 1000;
      const sw = tileSize;
      const sh = tileSize;

      // destination
      const dx = x * tileSize;
      const dy = y * tileSize;
      const dw = tileSize;
      const dh = tileSize;

      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
    }
  }
}
