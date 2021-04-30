noseX=0;
noseY=0;

function preload(){
    moustache=loadImage("https://i.postimg.cc/HkCrSq3F/download-2-removebg-preview.png")
}

function setup(){
    canvas=createCanvas(500, 500)
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotposes);
}

function draw(){
    image(video, 0, 0, 500, 500);
    image(moustache, noseX-35, noseY, 70, 60)
}

function take_picture(){
    save("filteredpicture.png")
}

function modelLoaded(){
    console.log("PoseNet has been loaded");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
       noseX= results[0].pose.nose.x
       noseY=results[0].pose.nose.y
    }
}