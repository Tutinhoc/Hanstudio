document.addEventListener("DOMContentLoaded", function () {
    let contactForm = document.querySelector(".contact-container");

    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;
        let maxTop = document.querySelector(".blog-section").offsetHeight - contactForm.offsetHeight;

        if (scrollY <= maxTop) {
            contactForm.style.top = scrollY + "px";
        }
    });
});