var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
 document.getElementById("textbox").innerHTML = "";
 recognition.start();
}

recognition.onresult = function run (event){
 console.log(event)

 var Content = event.results[0][0].transcript;
 console.log(Content);

 document.getElementById("textbox").innerHTML = Content;
 if(Content == "take my selfie")
 {
  console.log("taking selfie----")
  speak();
 }
}


function speak()
{
 var synth = window.speechSynthesis;

 speak_data ="Taking your Selfie in 5 Seconds";

 var utterThis = new SpeechSynthesisUtterance(speak_data);

 synth.speak(utterThis);
 Webcam.attach(camera);
}

camera = document.getElementById("camera");
Webcam.set({
 width:360,
 height:250,
 image_format : 'jpeg',
 jpeg_quality:90
});
