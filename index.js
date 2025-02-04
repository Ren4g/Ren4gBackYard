const yesButton = document.getElementById('yes');
yesButton.addEventListener('mouseover', () => {
    createEmojiStorm();
});
function clicked(){
    const buttons = document.querySelector('.buttons');
    const gif = document.querySelector('.container img');
    const h1 = document.querySelector('h1')
    buttons.style.display = 'none';
    gif.src = 'Capoo_Love.gif';
    h1.textContent = 'i know';
}


const noButton = document.getElementById('eo');
let clickCount = 0;

noButton.addEventListener('click', () => {
    clickCount++;
    const scale = Math.max(0.1, 1 - clickCount * 0.2);
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    yesButton.style.transform = `scale(${clickCount})`
    noButton.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    
    if (clickCount >= 5) {
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

