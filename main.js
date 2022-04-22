function setup(){
    canvas= createCanvas(640,420);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(640,420);
    video.hide();
}

function start(){
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("input").innerHTML = "Status: Detecting Objects";
    input_text = document.getElementById("input_id").value;
}
function modelLoaded(){
    console.log("Model_Loaded");
    Status = true;
}
function draw(){
    image(video,0,0,640,420);
}