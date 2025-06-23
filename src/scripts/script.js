document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("toggle-theme");
    const corpo = document.body;

    if (localStorage.getItem("tema") === "escuro") {
        corpo.classList.add("dark-mode");
        botao.textContent = "☀️";
    }

    botao.addEventListener("click", () => {
        corpo.classList.toggle("dark-mode");
        if (corpo.classList.contains("dark-mode")) {
            localStorage.setItem("tema", "escuro");
            botao.textContent = "☀️";
        } else {
            localStorage.setItem("tema", "claro");
            botao.textContent = "🌙";
        }
    });

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    function ativaLinkMenu() {
        let index = 0;
        const scrollPos = window.scrollY + 150;

        for (let i = 0; i < sections.length; i++) {
            const sectionTop = sections[i].offsetTop;
            const sectionHeight = sections[i].offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                index = i;
                break;
            }
        }

        navLinks.forEach(link => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }

    ativaLinkMenu();
    window.addEventListener("scroll", ativaLinkMenu);
});
