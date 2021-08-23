 video = ""
 object_detector = ""
 objects = []
 function preload(){
     video = createVideo("video.mp4");
   video.hide()
 }

function setup(){
    canvas = createCanvas(480, 350);
    canvas.center()
    
}
function start(){
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status"). innerHTML = "Status: Object Detecting"
}
function modelLoaded(){
    console.log("Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0)
}
function draw()
{
    
      image(video, 0, 0, 480, 350);
      
     
      if (status != "") {
        object_detector.detect(video, gotResult);
        document.getElementById("status").innerHTML = "Status: Object Detected"
          for (i  = 0; i< objects.length; i++) {
              stroke("blue")
              fill("red")
              noFill()
              percentage = floor(objects[i].confidence * 100);
            text(objects[i].label+" "+percentage+"%", objects[i].x-5, objects[i].y-5);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height); 
              document.getElementById("num_of_objects"). innerHTML = "Number of Objects: "+objects.length;
          }
      }
}

function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    if (results) {
      console.log(results);
objects = results
    }
}

