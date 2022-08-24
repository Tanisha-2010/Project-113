function preload() {
    ///No code for function preload.
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(300, 230);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);

}

function apply_tint() {
    tint_color = document.getElementById("input_tint_color").value;
}

function take_snapshot() {
    save("image.png");
}