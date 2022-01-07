noseX = 0;
noseY = 0;
chance = "moustache";

function moustache_btn() {
    chance = "moustache";
    document.getElementById("main").style.backgroundImage="url(Moustache_background.png)";
    document.getElementById("circle1").style.background="red";
    document.getElementById("circle1").style.boxShadow="1px 1px 38px red";
    document.getElementById("circle1").style.border="red";
    document.getElementById("circle").style.background="aquamarine";
    document.getElementById("circle").style.boxShadow="1px 1px 38px aquamarine";
    document.getElementById("circle").style.border="aquamarine";
}

function lipstic_btn() {
    chance = "lipstic";
    document.getElementById("main").style.backgroundImage="url(Lipistic_background.png)";
    document.getElementById("circle").style.background="red";
    document.getElementById("circle").style.boxShadow="1px 1px 38px red";
    document.getElementById("circle").style.border="red";
    document.getElementById("circle1").style.background="aquamarine";
    document.getElementById("circle1").style.boxShadow="1px 1px 38px aquamarine";
    document.getElementById("circle1").style.border="aquamarine";
}

function preload() {
    moustache = loadImage('https://i.postimg.cc/fRXp32JF/Whats-App-Image-2022-01-07-at-11-36-53-AM-removebg-preview.png')
    lipistic = loadImage('https://i.postimg.cc/C1dzLgdb/Lipstic.png');
}

function setup() {
    canvas = createCanvas(400, 400)
    canvas.position(1000,450)

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("model Initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x= "+noseX);
        console.log("nose y= "+noseY);
    }
}


function draw() {
    if (chance == "moustache") {
        image(video, 0, 0, 400, 400);
        image(moustache, noseX-170, noseY-40, 100,40);
    }
    if (chance == "lipstic") {
        image(video, 0, 0, 400, 400);
        image(lipistic, noseX-150, noseY-20, 70,30);
    }
}

function snapshot() {
    if (chance == "moustache") {
        save("moustache.png")
    }
    if (chance == "lipstic") {
        save("lipistic")
    }
    
}
