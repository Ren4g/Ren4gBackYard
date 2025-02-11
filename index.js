document.addEventListener("DOMContentLoaded", function () {
    const h2 = document.querySelector("#opening_messages");
    const h1 = document.querySelector("h1");
    const container = document.querySelector(".container");
    
    const messages = [
        "Greetings, sweetie~ ",
        "Do ya believe ",
        "that everyone can be a good person",
        "if",
        "they just try ?~"
    ];
    const delayBetweenMessages = 3000;
    const transitionTime = 300;

    container.style.display = "none";
    h1.textContent="";

    function typeText() {
        let index = 0;
        const interval = setInterval(() => {

            if (index < messages.length) {
                h2.style.opacity = "0";

                setTimeout(() => {
                    h2.textContent = messages[index];
                    h2.style.opacity = "1";
                    index++;
                }, transitionTime);

            } else {                
                clearInterval(interval);
                container.style.display = "block";
                h1.textContent = "Do u luv meeeeeeee :33";
                h2.style.display = 'none';
                let openingEffect = document.querySelector(".opening_eff");
                openingEffect.style.background = "url('Animation-1738582289554-ezgif.com-gif-maker copy.gif?v=1') no-repeat center, pink";
                openingEffect.style.backgroundSize = "contain";
                openingEffect.style.animation = " heartPulse 1.4s 700ms ease-out forwards";
            }
        }, delayBetweenMessages);
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
    const h1 = document.querySelector('h1')
    buttons.style.display = 'none';
    gif.src = 'dance_dance.gif';
    h1.textContent = 'i know';
}



const noButton = document.getElementById('eo');
let clickCount = 0;

noButton.addEventListener('click', () => {
    clickCount++;
    const scale = Math.min(2, 1 + clickCount * 0.2);
    yesButton.style.transform = `scale(${scale})`;

    const maxX = window.innerWidth / 2 - 100;  
    const maxY = window.innerHeight / 2 - 100;
    const x = Math.random() * maxX * 2 - maxX; 
    const y = Math.random() * maxY * 2 - maxY;

    const minScale = 0.3; 
    const newScale = Math.max(minScale, 1 - clickCount * 0.1);
    noButton.style.transform = `translate(${x}px, ${y}px) scale(${newScale})`;

    if (clickCount >= 6) {
        noButton.style.display = 'none';
    }
});

function createEmojiStorm() {
    const emojis = ['💖', '💘', '💞', '💕', '💓'];
    for (let i = 0; i < 20; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.top = Math.random() * 100 + 'vh';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.fontSize = Math.random() * 20 + 10 + 'px';
        emoji.style.animationDuration = Math.random() * 2 + 1 + 's';
        
        document.body.appendChild(emoji);
        
        setTimeout(() => emoji.remove(), 3000);
    }
}

document.addEventListener('click', function(event) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💓'; 
    heart.style.left = `${event.clientX - 10}px`; 
    heart.style.top = `${event.clientY - 10}px`;
    const heartsContainer = document.getElementById('hearts-container');
    heartsContainer.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 1000); 
  });
  

const videoId = 'R5DsnNfZIB8';

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '1',
        width: '1',
        videoId: videoId,
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'disablekb': 1,
            'fs': 0,
            'loop': 1000,
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
    event.target.seekTo(5);
    event.target.unMute();
}