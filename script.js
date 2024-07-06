function showSurprise() {
    document.getElementById('surprise').classList.remove('hidden');
    startConfetti();
    animateCake();

    // Menghilangkan tombol setelah diklik
    document.querySelector('button').style.display = 'none';
}

function startConfetti() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 300; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confettiPiece.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confettiPiece);
    }
}

function animateCake() {
    const cake = document.querySelector('.cake');
    cake.style.animation = 'bounceIn 2s ease-in-out';
    setTimeout(() => {
        const candles = document.querySelectorAll('.candle');
        candles.forEach(candle => {
            candle.style.animation = 'flicker 1s infinite';
        });
    }, 2000);
}

function getRandomColor() {
    const colors = ['#ff69b4', '#ff1493', '#ff4500', '#ffd700', '#32cd32', '#1e90ff', '#4b0082', '#ee82ee'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Additional animations
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    container.style.animation = 'zoomIn 1s ease-in-out';
});
