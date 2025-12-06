//Buttons
const SendGreetingBtn = document.getElementById('main-greeting');
const CreateWishBtn = document.getElementById('CreateWishBtn');
const ShareBtn = document.getElementById('shareBtn');


//Sections
const GreetingsSection = document.getElementById('greetings-section');
const NameInputSection = document.getElementById('name-input-section');
const WishDisplaySection = document.getElementById('wish-display-section');

//Input and Output
const NameInput = document.getElementById('nameInput');
const WishOutput = document.getElementById('wish-output');

//Event Listeners
SendGreetingBtn.addEventListener('click', () => {
    GreetingsSection.classList.add('hide');
    setTimeout(() => {
        GreetingsSection.style.display = 'none';
        NameInputSection.style.display = 'block';
    }, 700); // Match the CSS transition duration
});

CreateWishBtn.addEventListener('click', () => {
    const name = NameInput.value.trim();
    if (name) {
        WishOutput.textContent = `Merry Christmas, ${name}! May your holidays be filled with joy and laughter!`;
        NameInputSection.style.display = 'none';
        WishDisplaySection.style.display = 'block';
    } else {
        alert('Please enter a name to create your wish.');
    }
});
ShareBtn.addEventListener('click', () => {
    const wishText = WishOutput.textContent;
    if (navigator.share) {
        navigator.share({
            title: 'Christmas Wish',
            text: wishText,
            url: window.location.href
        }).then(() => {
            console.log('Wish shared successfully!');
        }).catch((error) => {
            console.error('Error sharing wish:', error);
        });
    } else {
        // Try to copy to clipboard
        if (navigator.clipboard) {
            navigator.clipboard.writeText(wishText).then(() => {
                alert('Wish copied to clipboard! You can now paste it anywhere.');
            }).catch(() => {
                alert('Could not copy to clipboard. Please copy manually.');
            });
        } else {
            // Fallback for older browsers
            const tempInput = document.createElement('input');
            tempInput.value = wishText;
            document.body.appendChild(tempInput);
            tempInput.select();
            try {
                document.execCommand('copy');
                alert('Wish copied to clipboard! You can now paste it anywhere.');
            } catch (err) {
                alert('Could not copy to clipboard. Please copy manually.');
            }
            document.body.removeChild(tempInput);
        }
    }
});

//.. snowflakes...
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = (2 + Math.random() * 3) + 's';
    snowflake.style.opacity = 0.85;
    // SVG snowflake shape
    snowflake.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff" stroke-width="2"><line x1="12" y1="2" x2="12" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="4.5" y1="4.5" x2="19.5" y2="19.5" /><line x1="19.5" y1="4.5" x2="4.5" y2="19.5" /></g></svg>';
    document.body.appendChild(snowflake);
    setTimeout(() => {
        if (snowflake.parentNode) snowflake.parentNode.removeChild(snowflake);
    }, 5000);
}

setInterval(createSnowflake, 200);
// Santa Claus animation
window.addEventListener('DOMContentLoaded', () => {
    splashSparkles();
});

//--- Glitter sparkles...
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    document.body.appendChild(sparkle);
    setTimeout(() => {
        if (sparkle.parentNode) sparkle.parentNode.removeChild(sparkle);
    }, 2000);
}

// Splash sparkles on page load
function splashSparkles() {
    for (let i = 0; i < 30; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createSparkle(x, y);
    }
}
window.addEventListener('DOMContentLoaded', () => {
    splashSparkles();
});
