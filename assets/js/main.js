// start the change background on scoole dawn
    let navbarBg = document.querySelector("nav.navbar");

    window.onscroll = function () {
        if (window.scrollY >= 100) {
            navbarBg.classList.add("bg-glassy");
        } else {
            navbarBg.classList.remove("bg-glassy");
        }
    };
// en the change background on scoole dawn
