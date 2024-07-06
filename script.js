function showSurprise() {
    document.getElementById('surprise').classList.remove('hidden');
    document.getElementById('confetti').classList.remove('hidden');
    document.getElementById('balloons').classList.add('hidden');
    startConfetti();
    animateCake();
    animateStars();

    // Menghilangkan tombol setelah diklik
    document.querySelector('button').style.display = 'none';
}

function animateBalloons() {
    const balloonContainer = document.getElementById('balloons');
    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.animationDuration = (Math.random() * 3 + 5) + 's';
        balloonContainer.appendChild(balloon);
    }
}

function animateStars() {
    const cake = document.querySelector('.cake');
    for (let i = 0; i < 10; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + 'px';
        star.style.top = Math.random() * 100 + 'px';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        cake.appendChild(star);
    }
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
    animateBalloons(); // Animate balloons on page load
});
