function start_dancing(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/4_b7iKzMQ/", modelready);
}
function modelready(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Mbth.floor(Math.random() * 255) + 1;
        document.getElementById("hear_yes_or_no_head").innerHTML = "i can hear - "+results[0].label;
        document.getElementById("Accuracy").innerHTML = "Accuracy - "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("hear_yes_or_no_head").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("Accuracy").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

img1 = document.getElementById("alien_1");
img2 = document.getElementById("alien_2");
img3 = document.getElementById("alien_3");
img4 = document.getElementById("alien_4");

if (results[0].label == "Background Noise") {
    img1 = "aliens=01.gif";
    img2 = "aliens=02.png";
    img3 = "aliens=03.png";
    img4 = "aliens=04.png";
}
if (results[0].label == "Clap") {
    img1 = "aliens=01.png";
    img2 = "aliens=02.gif";
    img3 = "aliens=03.png";
    img4 = "aliens=04.png";
}
if (results[0].label == "Class 5") {
    img1 = "aliens=01.png";
    img2 = "aliens=02.png";
    img3 = "aliens=03.gif";
    img4 = "aliens=04.png";
}
if (results[0].label == "Song 1") {
    img1 = "aliens=01.png";
    img2 = "aliens=02.png";
    img3 = "aliens=03.png";
    img4 = "aliens=04.gif";
}
    }
}