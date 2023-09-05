const camera = document.getElementById("camera");
const result = document.getElementById("result");

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

Webcam.attach(camera);

function snap() {
    result.innerHTML = "";
    Webcam.snap(function (dataURI) {
        const captura = document.createElement("img");
        captura.setAttribute("id", "captura");
        captura.setAttribute("src", dataURI);
        result.appendChild(captura);
    });
}
const teachablemachineLink = '';
const modelLink = teachablemachineLink + 'model.json'
const classifier = ml5.imageClassifier(modelLink, modelLoaded)

function modelLoaded(){
    console.log('Modelo Carregado')
    Webcam.attach(camera);

}
function check() {
    const img = document.getElementById('captura');
    classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    console.log(error);
    console.log(results);

    const objeto = document.getElementById("objectName");
    const precisao = document.getElementById("objectAccuracy");

    if (!error) {
        objeto.innerHTML = results[0].label;
        precisao.innerHTML = results[0].confidence.toFixed(2);
    } else {
        console.error(error);
    }
}

