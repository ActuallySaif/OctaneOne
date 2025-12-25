document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const models = Array.from(document.querySelectorAll("model-viewer"))
        .filter(m => m.getAttribute("src"));

    let loaded = 0;
    const total = models.length;
    const MAX_WAIT = 6000; // failsafe

    if (total === 0) {
        hide();
        return;
    }

    const timeout = setTimeout(hide, MAX_WAIT);

    models.forEach(model => {
        model.addEventListener("load", () => {
            loaded++;

            if (loaded >= total) {
                clearTimeout(timeout);
                hide();
            }
        }, { once: true });
    });

    function hide() {
        preloader.classList.add("hidden");
        document.body.classList.remove("loading");
        setTimeout(() => preloader.remove(), 700);
    }
});