const leadPhrases = [
    "Sending sparkles of joy across the sky...",
    "New memories are baking in the stars tonight.",
    "Every candle knows a wish is on the way.",
    "Tonight, the universe hums your melody.",
    "Let the constellations toast to you."
];

const closingPhrases = [
    "You are the moment, today and always.",
    "May the next orbit be even kinder.",
    "You glow brighter than every firework we launch.",
    "The world is softer because of your heart."
];

const confettiColors = ['#ff7edb', '#ffd5a5', '#8ef6e4', '#a5b4fc', '#f4f1ff'];

let leadIndex = 0;
let progress = 0;
let fireworksParticles = [];

const canvas = document.getElementById('fireworks-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function cycleLeadText() {
    const leadText = document.getElementById('lead-text');
    if (!leadText) return;
    leadText.style.opacity = 0;
    setTimeout(() => {
        leadText.textContent = leadPhrases[leadIndex % leadPhrases.length];
        leadIndex++;
        leadText.style.opacity = 1;
    }, 300);
}

function animateProgress() {
    const progressBar = document.getElementById('progressBar');
    if (!progressBar) return;
    progress = (progress + 3) % 101;
    progressBar.style.width = `${progress}%`;
}

function pulseCard() {
    const card = document.querySelector('.hero-card');
    if (!card) return;
    card.classList.add('pulse');
    setTimeout(() => card.classList.remove('pulse'), 600);
}

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function createFirework(x = window.innerWidth / 2, y = window.innerHeight / 3) {
    const particleTotal = 32;
    const hue = Math.floor(randomBetween(0, 360));
    for (let i = 0; i < particleTotal; i++) {
        fireworksParticles.push({
            x,
            y,
            alpha: 1,
            size: randomBetween(2, 4),
            color: `hsl(${hue + randomBetween(-20, 20)}, 80%, 60%)`,
            velocity: {
                x: Math.cos((Math.PI * 2 * i) / particleTotal) * randomBetween(2, 5),
                y: Math.sin((Math.PI * 2 * i) / particleTotal) * randomBetween(2, 5)
            }
        });
    }
}

function drawFireworks() {
    ctx.fillStyle = 'rgba(5, 6, 10, 0.25)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    fireworksParticles = fireworksParticles.filter(p => p.alpha > 0);
    fireworksParticles.forEach(p => {
        p.x += p.velocity.x;
        p.y += p.velocity.y;
        p.velocity.y += 0.02;
        p.alpha -= 0.015;

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(drawFireworks);
}

drawFireworks();

function releaseLantern() {
    const stage = document.getElementById('lanternStage');
    if (!stage) return;
    const lantern = document.createElement('div');
    lantern.className = 'lantern';
    lantern.style.left = `${randomBetween(10, 80)}%`;
    lantern.style.animationDuration = `${randomBetween(7, 11)}s`;
    stage.appendChild(lantern);
    setTimeout(() => lantern.remove(), 11000);
}

function rainConfetti() {
    for (let i = 0; i < 80; i++) {
        const piece = document.createElement('span');
        piece.className = 'confetti-piece';
        piece.style.left = `${Math.random() * 100}vw`;
        piece.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        piece.style.animationDuration = `${randomBetween(2.5, 4.5)}s`;
        piece.style.animationDelay = `${Math.random()}s`;
        document.body.appendChild(piece);
        setTimeout(() => piece.remove(), 5000);
    }
}

function updateClosingMessage() {
    const closing = document.getElementById('closingMessage');
    if (!closing) return;
    closing.textContent = closingPhrases[Math.floor(Math.random() * closingPhrases.length)];
}

function toggleSparkMode(button) {
    document.body.classList.toggle('sparked');
    if (button) {
        const active = document.body.classList.contains('sparked');
        button.textContent = active ? 'Calm the glow' : 'Spark more magic';
    }
}

function duplicateTicker() {
    const ticker = document.getElementById('tickerTrack');
    if (!ticker) return;
    ticker.innerHTML += ticker.innerHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    duplicateTicker();
    cycleLeadText();
    setInterval(cycleLeadText, 4000);
    setInterval(animateProgress, 350);

    const wishButton = document.getElementById('wishButton');
    const sparkButton = document.getElementById('sparkButton');
    const lanternButton = document.getElementById('lanternButton');
    const celebrateButton = document.getElementById('celebrateButton');
    const confettiButton = document.getElementById('confettiButton');

    wishButton?.addEventListener('click', () => {
        createFirework(window.innerWidth / 2, window.innerHeight / 2.5);
        releaseLantern();
        pulseCard();
        updateClosingMessage();
    });

    sparkButton?.addEventListener('click', (event) => {
        toggleSparkMode(event.currentTarget);
        pulseCard();
    });

    lanternButton?.addEventListener('click', () => {
        releaseLantern();
        updateClosingMessage();
    });

    celebrateButton?.addEventListener('click', () => {
        createFirework(randomBetween(window.innerWidth * 0.2, window.innerWidth * 0.8), randomBetween(window.innerHeight * 0.2, window.innerHeight * 0.5));
        pulseCard();
    });

    confettiButton?.addEventListener('click', () => {
        rainConfetti();
        updateClosingMessage();
    });
});

const videoId = 'LpPZ1l7xXyU';

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: videoId,
        playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            modestbranding: 1,
            playlist: videoId,
            rel: 0,
            showinfo: 0,
            mute: 1,
        },
        events: {
            onReady: onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    event.target.unMute();
    event.target.setVolume(40);
}
