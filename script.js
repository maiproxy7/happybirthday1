// Custom Greeting
function setGreeting() {
    const hours = new Date().getHours();
    const greeting = document.getElementById("greeting");
    
    if (hours < 12) {
        greeting.innerHTML = "HAPPY BIRTHDAY, Chotiii! 🎉";
    } else if (hours < 18) {
        greeting.innerHTML = "HAPPY BIRTHDAY, Chotiii! 🎉";
    } else {
        greeting.innerHTML = "HAPPY BIRTHDAY, Chotiii! 🎉";
    }
}
setGreeting();

// Countdown Timer
function updateTimer() {
    const targetDate = new Date();
    targetDate.setHours(23, 59, 59); // End of the day
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("timer").textContent = " LOVE U INFINITY 💞";
        return;
    }

    const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

    document.getElementById("timer").textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTimer, 1000);
updateTimer();

// Birthday Cake Animation (blow out candles)
function blowOutCandles() {
    const cakeMessage = document.getElementById("cakeMessage");
    cakeMessage.textContent = "Happy Birthday MAMMA! 🎂🎉🎈";
    createConfetti();
}

// Confetti Animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for (let i = 0; i < 300; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 4 + 1,
        d: Math.random() * 100,
    });
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${p.d}, 70%, 50%)`;
        ctx.fill();
    });
}

function updateParticles() {
    particles.forEach((p) => {
        p.y += Math.random() * 3;
        if (p.y > canvas.height) p.y = -p.r;
    });
}

function animate() {
    drawParticles();
    updateParticles();
    requestAnimationFrame(animate);
}
animate();

// Music Toggle
function toggleMusic() {
    const music = document.getElementById("music");
    const musicButton = document.getElementById("musicButton");

    if (music.paused) {
        music.play();
        musicButton.textContent = "🎶 Pause Music";
    } else {
        music.pause();
        musicButton.textContent = "🎶 Play Music";
    }
}

// Surprise Alert
function showSurprise() {
    alert(" I DONT KNOW WHAT TO SAY HOW TO EXPRESS AFTER SO MANY YEARS I AM CELEBRATING THIS BIRTHDAY BUT I WANNA JUST SAY KI LOVE U INFINITY AND BEYOND MAAMMA THANK U SO MUCH FOR BEING MY SIDE AND SUPPORTING ME FOR MOTIVATING ME AND MAKING ME FEEL GOOD AND WIPING OUT MY TEARS VIRTUALLY BLESSED TO HAVE U MAMMA THANKS FOR ACTING MAMMA'S ROLE IN MY LIFE I PRAY KI TU BUS HAMESHA KHUSH REH AND MERE SAAT REH DONT LEAVE ME AND GO AGAIN WHAT WILL I DO WITHOUT U LIFE BECOMES MEANING LESS UR LIKE SALT TO MY FOOD AND MAY ALL UR WHISHES COME TRUE AND ALWAYS BE HAPPY CHOTI NOTHING CHANGE FOR ME UR ALWAYS THE SAME CHOTI AS 7 YRS AGO TEREKO BHT MISS KARRA JALDI JUGAD KR GOA JNEKA 1 HR IS NOT ENOUGH TO SPEND WITH U AFTER SO MANY YRS AND I HAVE A AMAZING GIFT FOR U YOU WOULD LOVE IT SO JALDI MIL MEREKO LAST BUT NOT LEAST UR ARE MY MOST TOP PRIVATI AND LOVE U... THIS TOOK ME 25 DAYS,130 Hours,7,800 Minutes,468,000 Seconds TO BUILD THIS WEBSITE THIS IS THE SURPRISE I COULD GIVE U RYT NOW I HOPE U LOVED IT. U KN U ONCE TOLD ME THAT U ALWAYS WANT TEENAGE GIFTS SO I THOUGHT THIS WOULD BE DIFFERENT FROM OTHERS AND MAKES U HAPPY AND MEMORABLE ONE ONCE AGAING HAPPY BIRTHDAY MY CHOTII ENJOY UR DAY  ");
}
