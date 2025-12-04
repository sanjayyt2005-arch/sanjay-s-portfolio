/* ==================================
   PRELOADER
================================== */
window.addEventListener("load", () => {
    document.getElementById("preloader").style.display = "none";
});

/* ==================================
   THEME SWITCHER
================================== */
const themeBtn = document.querySelector(".theme-btn");
let dark = true;

themeBtn.addEventListener("click", () => {
    dark = !dark;

    if (!dark) {
        document.body.style.background = "#f1f1f1";
        document.body.style.color = "#000";
        themeBtn.innerText = "Dark";
    } else {
        document.body.style.background = "#0a0f1a";
        document.body.style.color = "#fff";
        themeBtn.innerText = "Light";
    }
});

/* ==================================
   3D TILT EFFECT
================================== */
document.querySelectorAll(".tilt").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.transform = `
            perspective(600px)
            rotateX(${-(y - rect.height / 2) / 15}deg)
            rotateY(${(x - rect.width / 2) / 15}deg)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});

/* ==================================
   PARALLAX EFFECT
================================== */
document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".parallax").forEach((el) => {
        const speed = 30;
        const x = (window.innerWidth - e.pageX * speed) / 200;
        const y = (window.innerHeight - e.pageY * speed) / 200;

        el.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

/* ==================================
   CONTACT FORM
================================== */
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
});
