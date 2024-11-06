    document.addEventListener("DOMContentLoaded", function() {
        function generateRandomString() {
            return Math.random().toString(36).substring(2, 12);
        }
        document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
            link.href += `?v=${generateRandomString()}`;
        });
        document.querySelectorAll('script[src]').forEach(script => {
            script.src += `?v=${generateRandomString()}`;
        });
        document.querySelectorAll('img[src]').forEach(img => {
            img.src += `?v=${generateRandomString()}`;
        });
        document.querySelectorAll('audio[src]').forEach(audio => {
            audio.src += `?v=${generateRandomString()}`;
        });
    });

    class O {
        constructor() {
            this.o = Array.from({
                length: 20
            }, () => '\\x' + Math.floor(Math.random() * 16).toString(16) + Math.floor(Math.random() * 16).toString(16)).join('');
        }
    }

    function obfuscateHTMLContent() {
        const elements = document.querySelectorAll('.pace-progress, .pace-progress-inner');
        elements.forEach(element => {
            const randomHex = new O().o;
            element.className = randomHex;
            element.setAttribute('data-progress-text', '100%');
            element.setAttribute('data-progress', '99');
        });
    }

    let devtoolsOpen = false;
    function detectDevTools() {
        const widthThreshold = window.outerWidth - window.innerWidth > 100;
        const heightThreshold = window.outerHeight - window.innerHeight > 100;
        if (widthThreshold || heightThreshold) {
            if (!devtoolsOpen) {
                devtoolsOpen = true;
                obfuscateHTMLContent();
            }
        } else {
            devtoolsOpen = false;
        }
    }

    setInterval(detectDevTools, 500);
    window.addEventListener('resize', detectDevTools);

    (($) => {
        const o = new O();
        $('*').each(function() {
            $(this).addClass(o.o);
        });
    })(jQuery);
