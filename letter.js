const message = `Dear Love ❤️,

Happy Birthday!

I wish I could be there with you today.

Since I couldn't...

I decided to build something for you.

Every animation,
every color,
every line of code...

was written while thinking about you.

Distance may separate us,
but nothing can separate our hearts.

Thank you for always making me smile.

Thank you for always believing in me.

Thank you for coming into my life.

I hope today brings you
all the happiness
that you bring into mine.

I love you more than words can ever express.

Happy Birthday once again ❤️

Forever Yours,

Samarth ❤️`;

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