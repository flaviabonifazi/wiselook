 // Funzione per aprire la fotocamera
 function openCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            var video = document.getElementById('camera-feed');
            video.srcObject = stream;
            video.play();
        })
        .catch(function(err) {
            console.log('Errore durante l\'apertura della fotocamera: ' + err);
        });
}

// Funzione per scattare la foto
function takePicture() {
    var video = document.getElementById('camera-feed');
    var canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    var imageData = canvas.toDataURL('image/png');
    var capturedImage = document.getElementById('captured-image');
    capturedImage.src = imageData;
    capturedImage.style.display = 'block';
    video.style.display = 'none';
}

// Gestisci il clic sul pulsante "Scatta"
document.getElementById('camera-button').addEventListener('click', function() {
    takePicture();
});

// Apri la fotocamera quando la pagina è caricata
document.addEventListener('DOMContentLoaded', function() {
    openCamera();
});