const message = `Dear baby ❤️,

Happy Birthday ❤️

I wish I could be there beside you today.

Every little animation you saw,
every line of code,
every second I spent building this...
was for you.

Tumne mere liye jitna kiya h shayad mai utna kabhi nhi kar paunga.

I know this is not much, but I hope it brings a smile to your face.

Thank you mere liye itna sab krne ke liye. From showing me how to
add someone to cc .. se le kr mere liye itne sare gifts dene tak.
Sab ke liye mai hamesha aapka shukriya ada krta rahunga.

Parso se tumhare life ka naya chapter shuru hone wala h,
i hope ki tumko usme maza aye.... us chapter ko tum enjoy kro.
I daily pray ki tumahre sare prblems solve ho jaye, aur tum hamesha khush raho.
I hope aisa jaldi ho jaye.
I hope jaldi tumhne kitna suffer kiya h usse zyada khushi tumko mile return me.
Kyuki future IAS ko khush rakhna imp h, desh ka sawal h.

Me Banglore to nhi aa paya wish krne but I hope ye letter tumko achha lage.

Aj tumahra din h, achhe se enjoy kro. Kuch tension mat lo kisika (pg ka bilkul nhi)

Know that I really care for you,
more than words can ever express.
I am always there for you.

Happy Birthday once again ❤️

P.S. Something is hidden on the page, try to find it.

`;

const letter = document.getElementById("letterText");

let index = 0;
const speed = 45;

function type() {

    if (index < message.length) {

        letter.innerHTML += message.charAt(index);

        index++;

        setTimeout(type, speed);

    }

}

setTimeout(type, 1200);

document.addEventListener("DOMContentLoaded", () => {

    const photo = document.getElementById("secretPhoto");
    const messageBox = document.getElementById("secretMessage");

    let clickCount = 0;

    photo.addEventListener("click", () => {

        clickCount++;

        // feedback animation
        photo.style.transform = "scale(1.05)";
        setTimeout(() => {
            photo.style.transform = "scale(1)";
        }, 150);

        if (clickCount === 6) {

            // fade photo
            photo.style.opacity = "0";
            photo.style.pointerEvents = "none";

            // show message
            messageBox.classList.add("show");
            messageBox.style.opacity = "1";

        }
    });

});