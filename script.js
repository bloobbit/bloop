window.addEventListener("load", () => {
    const audio = new Audio("song.mp3");

    audio.volume = 0.2; 
    audio.loop = true; 

    audio.play().catch(() => {
        console.log("Autoplay blocked until user interaction.");
    });
});
