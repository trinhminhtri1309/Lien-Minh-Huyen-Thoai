function playStartSound() {
    const audio = document.getElementById('welcome-sound');
    if (audio) {
        audio.play().catch(error => {
            console.log("Trình duyệt chặn phát tự động, cần tương tác trước.");
        });
    }
}

// Hàm mới: Phát âm thanh và chuyển hướng đến trang tải game chuẩn
function playAndRedirect() {
    const audio = document.getElementById('welcome-sound');
    if (audio) {
        audio.play().catch(error => console.log("Cần tương tác để phát nhạc."));
    }

    // Link tải game chuẩn của Liên Minh Huyền Thoại (VNGGames/Riot)
    const downloadUrl = "https://lienminh.vnggames.com/vi-vn/download/";
    
    // Đợi 1.5 giây để nghe hiệu ứng âm thanh trước khi chuyển trang
    setTimeout(() => {
        window.location.href = downloadUrl;
    }, 1500);
}

// Tính năng phát âm thanh khi hover vào tướng
const cards = document.querySelectorAll('.champ-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const soundPath = card.getAttribute('data-sound');
        if (soundPath) {
            const audio = new Audio(soundPath);
            audio.volume = 0.4;
            audio.play().catch(() => {}); 
        }
    });
});