const musicFiles = [
    '//1.mp3',
    '//2.mp3',
    '//3.mp3',
    '//4.mp3',
    '//5.mp3',
    '//6.mp3',
    '//7.mp3',
];

let audio;

function playRandomMusic() {
    const randomIndex = Math.floor(Math.random() * musicFiles.length);
    const randomMusic = musicFiles[randomIndex];

    audio = new Audio(randomMusic);
    audio.play();
    audio.addEventListener('ended', playRandomMusic);
    document.body.removeEventListener('click', playRandomMusic);
}

document.body.addEventListener('click', playRandomMusic);
