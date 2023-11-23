// Tambahkan ini di dalam skrip untuk memberikan nama pada video
document.addEventListener('DOMContentLoaded', function() {
    // Mengambil elemen video
    const video = document.getElementById('videoPlayer');
    
    // Memberikan nama pada video
    const videoName = 'Vidio Pertama';
    video.setAttribute('title', videoName);
    
    // Output nama video ke konsol (opsional)
    console.log('Nama Video:', videoName);
});￼Enter
