    class O {
        constructor() {
            this.o = Array.from({
                length: 20
            }, () => '\\x' + Math.floor(Math.random() * 16).toString(16) + Math.floor(Math.random() * 16).toString(16)).join('');
        }
    }
    (($) => {
        const o = new O();
        $('*').each(function() { // Sài * Tức Là Root (Chọn Tất Cả Thẻ HTML)
            $(this).addClass(o.o);
        });
    })(jQuery);
    setInterval(() => $('#real-time').text(new Date().toLocaleTimeString()), 1000);
    function ShowToast() {
        x.addClass('show');
        setTimeout(function(){ x.removeClass('show'); }, 5000);
    }      
    var x = $('#Toast');
    x.html('Resources Code V5.0.0');

const musicFiles = [
    '../music/1.mp3',
    '../music/2.mp3',
    '../music/3.mp3',
    '../music/4.mp3',
    '../music/5.mp3',
    '../music/6.mp3',
    '../music/7.mp3',
    '../music/8.mp3',
    '../music/9.mp3',
    '../music/10.mp3',
    '../music/11.mp3',
    '../music/12.mp3',
    '../music/13.mp3',
    '../music/14.mp3',
    '../music/15.mp3',
    '../music/16.mp3',
    '../music/17.mp3',
    '../music/18.mp3',
    '../music/19.mp3',
    '../music/20.mp3',
    '../music/21.mp3',
    '../music/22.mp3',
    '../music/23.mp3'
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
