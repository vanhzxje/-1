const musicFiles = [
    'https://vanhzxje.github.io/-1/music/1.mp3',
    'https://vanhzxje.github.io/-1/music/2.mp3',
    'https://vanhzxje.github.io/-1/music/3.mp3',
    'https://vanhzxje.github.io/-1/music/4.mp3',
    'https://vanhzxje.github.io/-1/music/5.mp3',
    'https://vanhzxje.github.io/-1/music/6.mp3',
    'https://vanhzxje.github.io/-1/music/7.mp3',
    'https://vanhzxje.github.io/-1/music/8.mp3',
    'https://vanhzxje.github.io/-1/music/9.mp3',
    'https://vanhzxje.github.io/-1/music/10.mp3',
    'https://vanhzxje.github.io/-1/music/11.mp3',
    'https://vanhzxje.github.io/-1/music/12.mp3',
    'https://vanhzxje.github.io/-1/music/13.mp3',
    'https://vanhzxje.github.io/-1/music/14.mp3',
    'https://vanhzxje.github.io/-1/music/15.mp3',
    'https://vanhzxje.github.io/-1/music/16.mp3',
    'https://vanhzxje.github.io/-1/music/17.mp3',
    'https://vanhzxje.github.io/-1/music/18.mp3',
    'https://vanhzxje.github.io/-1/music/19.mp3',
    'https://vanhzxje.github.io/-1/music/20.mp3',
    'https://vanhzxje.github.io/-1/music/21.mp3',
    'https://vanhzxje.github.io/-1/music/22.mp3',
    'https://vanhzxje.github.io/-1/music/23.mp3'
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
