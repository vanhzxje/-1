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


    function shuffleElements() {
        const body = document.body;
        const elements = Array.from(body.children); // Lấy tất cả các phần tử con của body
        for (let i = elements.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            body.insertBefore(elements[j], elements[i]); // Đổi vị trí phần tử
        }
    }

    // Kiểm tra nếu DevTools được mở
    let devtoolsOpen = false;
    const detectDevTools = () => {
        const widthThreshold = window.outerWidth - window.innerWidth > 100;
        const heightThreshold = window.outerHeight - window.innerHeight > 100;
        if (widthThreshold || heightThreshold) {
            devtoolsOpen = true;
            shuffleElements(); // Gọi hàm xáo trộn khi phát hiện DevTools
        }
    };

    // Kiểm tra DevTools liên tục
    setInterval(detectDevTools, 500);

    // Cũng phát hiện qua console
    window.addEventListener('resize', detectDevTools);
