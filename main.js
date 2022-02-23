function setup() {
    Canvas=createCanvas(800,400);
    Canvas.position(430,130);
    video=createCapture(VIDEO);
    video.size(400,400);
    poseNet=ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
    }
    function modelloaded(){
        console.log("posenet is initialized")
    }
    function draw(){
     background("blue");
     
    }
    function gotPoses(results){
      if(results.length>0){
          console.log(results);
      }  
    }