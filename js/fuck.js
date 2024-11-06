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

    function generateRandomHex(length) {
        let result = '';
        const characters = '0123456789abcdef';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    function obfuscateImportantElements() {
        const elements = document.querySelectorAll('.pace-progress, .pace-progress-inner');
        elements.forEach(element => {
            element.className = 'pace-progress ' + generateRandomHex(20);
            element.setAttribute('data-progress-text', '100%');
            element.setAttribute('data-progress', '99');
        });
    }

    let devtoolsOpen = false;
    const detectDevTools = () => {
        const widthThreshold = window.outerWidth - window.innerWidth > 100;
        const heightThreshold = window.outerHeight - window.innerHeight > 100;
        if (widthThreshold || heightThreshold) {
            if (!devtoolsOpen) {
                devtoolsOpen = true;
                obfuscateImportantElements();
            }
        } else {
            devtoolsOpen = false;
        }
    };
    setInterval(detectDevTools, 500);
    window.addEventListener('resize', detectDevTools);
