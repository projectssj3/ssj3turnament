const video = document.getElementById('liveStream');
video.addEventListener('error', (e) => console.error("Erreur de streaming :", e));