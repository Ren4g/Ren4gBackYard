

document.addEventListener("DOMContentLoaded", function () {
    const h2 = document.querySelector("#opening_messages");
    const h1 = document.querySelector("h1");
    const container = document.querySelector(".container");
    
    const messages = [
        "Sinh nhật zui zẻ 🎉",
        "tuổi mới mạnh khỏe",
        "mơ lớn thành công lớn",
        "Trùng san đăng đáo cao phong hậu",
        "Vạn lý dư đồ cố miện gian"
    ];
    const delayBetweenMessages = 2500;
    const transitionTime = 500;

    const celebrateButton = document.getElementById('celebrateButton');
        celebrateButton?.addEventListener('click', () => {
        createFirework(randomBetween(window.innerWidth * 0.2, window.innerWidth * 0.8), randomBetween(window.innerHeight * 0.2, window.innerHeight * 0.5));
        pulseCard();
    });

    container.style.display = "none";
    h1.textContent="";

    function typeText() {
        let index = 0;
        
        function showNextMessage() {
            if (index < messages.length) {
                h2.style.opacity = "0";
                
                setTimeout(() => {
                    h2.textContent = messages[index];
                    h2.style.opacity = "1";
                    index++;
                    setTimeout(showNextMessage, delayBetweenMessages);
                }, transitionTime);
            } else {
                h2.style.opacity = "0";
                setTimeout(() => {
                    h2.style.display = 'none';
                    container.style.display = "grid";
                    h1.textContent = "Happy birthday🎂";
                    
                    startConfetti();
                }, transitionTime);
            }
        }

        showNextMessage();
    }

    typeText();
});

const yesButton = document.getElementById('yes');
yesButton.addEventListener('mouseover', () => {
    createEmojiStorm();
});

function clicked(){
    const buttons = document.querySelector('.buttons');
    const gif = document.querySelector('.container img');
    const h1 = document.querySelector('h1');
    
    buttons.style.display = 'none';

    h1.textContent = 'Yay! 🥳';
    
    for(let i=0; i<5; i++) {
        setTimeout(createEmojiStorm, i * 500);
    }
    createBalloons();
}

function createEmojiStorm() {
    const emojis = ['🎂', '🎁', '🎈', '🎉', '🕯️', '🍰'];
    for (let i = 0; i < 30; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.top = -10 + 'px';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.fontSize = Math.random() * 20 + 20 + 'px';
        emoji.style.animationDuration = Math.random() * 2 + 2 + 's';
        
        document.body.appendChild(emoji);
        
        setTimeout(() => emoji.remove(), 4000);
    }
}

function createBalloons() {
    const colors = ['#ff7675', '#74b9ff', '#55efc4', '#a29bfe', '#fdcb6e'];
    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.left = Math.random() * 90 + 5 + 'vw';
        balloon.style.animationDuration = Math.random() * 3 + 4 + 's';
        document.body.appendChild(balloon);
        
        setTimeout(() => balloon.remove(), 8000);
    }
}

function startConfetti() {
    setInterval(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }, 300);
}

document.addEventListener('click', function(event) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '🎉'; 
    heart.style.left = `${event.clientX - 10}px`; 
    heart.style.top = `${event.clientY - 10}px`;
    const heartsContainer = document.getElementById('hearts-container');
    heartsContainer.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 1000); 
});

const videoId = '90w2RegGf9w';

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: videoId,
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'disablekb': 1,
            'fs': 0,
            'loop': 1,
            'modestbranding': 1,
            'playlist': videoId, 
            'rel': 0,
            'showinfo': 0,
            'mute': 1,
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}
