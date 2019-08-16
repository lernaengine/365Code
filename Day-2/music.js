function play() {
    let audio = document.getElementById("audio");
    audio.play();
    audio.volume = .5;
    }

    function pause() {
        let audio = document.getElementById("audio");
        audio.pause();
        audio.currentTime = 0;
    }