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

