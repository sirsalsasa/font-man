noseX=0;
noseY=0;
difference=0;
RWrist=0;
LWrist=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,520);

    canvas=createCanvas(550,450);
    canvas.position(560,100);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotResults);
}
function draw(){
    background("#e2e612");
    stroke("#5d31b5");
    fill("#db4dd2");
    textSize(difference);
    text("Font Manipulator",150,200);
    document.getElementById("font_size").innerHTML="The font size of the text = "+difference;
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function gotResults(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X = "+noseX+", Nose Y = "+noseY);

        RWrist=results[0].pose.rightWrist.x;
        LWrist=results[0].pose.leftWrist.x;
        difference=floor(LWrist-RWrist);
        console.log("Right Wrist = "+RWrist+", Left Wrist = "+LWrist+", Difference = "+difference);
    }
}

