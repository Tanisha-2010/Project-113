function preload() {
    ///No code for function preload.
}

function setup() {
    canvas = createCanvas(640, 430);
    canvas.position(300, 120);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);

    fill(10, 200, 10);
    stroke(0, 128, 0);
    circle(605, 395, 70);

    fill(10, 200, 10);
    stroke(0, 128, 0);
    circle(605, 35, 70);

    fill(10, 200, 10);
    stroke(0, 128, 0);
    circle(35, 395, 70);

    fill(10, 200, 10);
    stroke(0, 128, 0);
    circle(35, 35, 70);

    fill(300, 0, 0);
    stroke(0, 80, 0);
    rect(70, 20, 505, 30);

    fill(300, 0, 0);
    stroke(0, 80, 0);
    rect(70, 380, 505, 30);

    fill(300, 0, 0);
    stroke(0, 80, 0);
    rect(20, 65, 30, 300);

    fill(300, 0, 0);
    stroke(0, 80, 0);
    rect(590, 65, 30, 300);
}

function take_snapshot() {
    save("image.png");
}