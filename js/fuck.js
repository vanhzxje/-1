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
    });
