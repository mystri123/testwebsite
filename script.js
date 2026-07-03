// =====================================
// CHANGE THIS DATE
// =====================================

const birthdayDate = new Date("July 4, 2026 00:10:00").getTime();


// =====================================
// HTML Elements
// =====================================

const countdownScreen = document.getElementById("countdownScreen");
const heartContainer = document.getElementById("heartContainer");
const heart = document.getElementById("heart");
const cakeContainer = document.getElementById("cakeContainer");

const music = document.getElementById("birthdayMusic");

const continueBtn = document.getElementById("continueBtn");


// Countdown Numbers

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const leftPhoto = document.getElementById("leftPhoto");
const rightPhoto = document.getElementById("rightPhoto");

// =====================================
// Update Countdown
// =====================================
const message = `Dear baby ❤️,

Happy Birthday baby❤️

I wish I could be there beside you today.

Every little animation you saw,
every line of code,
every second I spent building this...
was for you (obviosuly).

Tumne mere liye jitna kiya h shayad mai utna kabhi nhi kar paunga.

I know this is not much, but I hope it brings a smile to your face.
Recently tumne bahut kuch face kiya h, i hope bday ke din tum uska badla
Thank you mere liye itna sab krne ke liye. From showing me how to
add someone to cc .. to mere liye itne sare gifts dene tak.
Sab ke liye mai hamesha aapka shukriya ada krta rahunga.

Parso se tumhare life ka naya chapter shuru hone wala h,
i hope ki tumko usme maza aye.... us chapter ko tum enjoy kro.
I daily pray ki tumahre sare prblems solve ho jaye, aur tum hamesha khush raho.
I hope aisa jaldi ho jaye.
I hope jaldi tumhne kitna suffer kiya h usse zyada khushi tumko mile return me.
Kyuki future IAS ko khush rakhna imp h, desh ka sawal h.




I can't wait for the day
when I celebrate your birthday beside you.

Until then...

Know that I love you
more than words can ever express.

Happy Birthday once again ❤️

Forever Yours,
Samarth`;


const flame1 = document.getElementById("flame1");
const flame2 = document.getElementById("flame2");
const cake = document.getElementById("cake");

const letterScreen = document.getElementById("letterScreen");
const letterText = document.getElementById("letterText");

let finished = false;

const timer = setInterval(updateCountdown, 1000);

updateCountdown();

function updateCountdown(){

    if(finished) return;

    const now = new Date().getTime();

    // const distance = -1;
    const distance = birthdayDate - now;

    // Birthday reached

    if(distance <= 0){

        clearInterval(timer);

        finished = true;

        startBirthdayAnimation();

        return;

    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

    const m = Math.floor((distance % (1000*60*60))/(1000*60));

    const s = Math.floor((distance % (1000*60))/1000);

    days.textContent = String(d).padStart(2,'0');
    hours.textContent = String(h).padStart(2,'0');
    minutes.textContent = String(m).padStart(2,'0');
    seconds.textContent = String(s).padStart(2,'0');

}



// =====================================
// Birthday Sequence
// =====================================

function startBirthdayAnimation(){

    // Fade countdown

    countdownScreen.classList.add("fadeOut");

    setTimeout(()=>{

        countdownScreen.style.display="none";

        // Show Heart

        heartContainer.classList.remove("hidden");

        heartContainer.classList.add("fadeIn");

    },800);


    // Heart beats for 3 seconds

    setTimeout(()=>{

        heart.classList.add("zoom");

    },3800);


    // Cake appears

    setTimeout(()=>{

        heartContainer.style.display="none";

        cakeContainer.classList.remove("hidden");

        cakeContainer.classList.add("fadeIn");

        // Light first candle
setTimeout(() => {
    flame1.classList.add("on");
}, 800);

// Light second candle
setTimeout(() => {
    flame2.classList.add("on");
}, 1600);

// Cake glows
setTimeout(() => {

    cake.classList.add("cakeGlow");

}, 2200);

// Confetti + Music
setTimeout(() => {

    launchConfetti();

    playMusic();

}, 2500);

    },5000);

    // Show photos after cake appears
setTimeout(() => {
    leftPhoto.classList.remove("hidden");
    rightPhoto.classList.remove("hidden");

    // trigger animation
    setTimeout(() => {
        leftPhoto.classList.add("show");
        rightPhoto.classList.add("show");
    }, 200);

}, 1000);

}



// =====================================
// Confetti
// =====================================

function launchConfetti(){

    confetti({

        particleCount:250,

        spread:180,

        origin:{ y:0.6 }

    });

}



// =====================================
// Music
// =====================================

function playMusic(){

    music.play().catch(()=>{

        console.log("Autoplay blocked by browser.");

    });

}



// =====================================
// Continue Button
// =====================================

continueBtn.onclick = ()=>{

    // Replace this with your memory website

    window.location.href="letter.html";

};

