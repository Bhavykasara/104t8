/*--Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

Webcam.attach("#camera");


function selfie() {
Webcam.snap({
    function(data_url){
        document.getElementById("result").innerHTML='<img src="'+data_url+'">';
    }
});
}--*/

vedio=document.getElementById("camera");
    navigator.mediaDevices.getUserMedia({video:true})
    .then(stream=> {
        vedio.srcObject=stream;
    }).catch(function(err){
        console.log("Something went wrong");
        console.log(err);
    });

function selfie() {
    vedio=document.getElementById("camera");
    img=document.getElementById("result");
    img.srcObject=vedio;
}

console.log("ml5 version",ml5.version);
