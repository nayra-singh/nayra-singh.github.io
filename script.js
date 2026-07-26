const words = [
    "web experiences.",
    "full-stack projects.",
    "solutions with code.",
    "and keep learning."
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function type() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(type, 1400);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;
        }
    }

    setTimeout(type, deleting ? 45 : 80);
}

type();


/* DARK / LIGHT MODE */

const themeButton =
    document.getElementById("themeToggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const lightMode =
        document.body.classList.contains("light");

    themeButton.textContent =
        lightMode ? "☀" : "☾";

    localStorage.setItem(
        "theme",
        lightMode ? "light" : "dark"
    );
});


if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light");

    themeButton.textContent = "☀";
}


/* SCROLL REVEAL */

const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {
        threshold: 0.12
    });


document.querySelectorAll(
    ".skill-card, .project-card, .achievement, .timeline-item"
).forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});
