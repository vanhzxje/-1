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

    function encodeHTMLContent() {
        const body = document.body;
        body.innerHTML = btoa(body.innerHTML);
    }

    document.addEventListener("keydown", function(event) {
        if (event.key === "F12") {
            encodeHTMLContent(); 
        }
    });

    function detectDevTools() {
        const widthThreshold = window.outerWidth - window.innerWidth > 100;
        const heightThreshold = window.outerHeight - window.innerHeight > 100;
        if (widthThreshold || heightThreshold) {
            encodeHTMLContent();
        }
    }

    setInterval(detectDevTools, 500);
    window.addEventListener('resize', detectDevTools);
