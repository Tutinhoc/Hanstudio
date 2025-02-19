document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel-track");

    carousels.forEach((carousel) => {
        let index = 0;
        setInterval(() => {
            index = (index + 1) % 3; // 3 ảnh
            carousel.style.transform = `translateX(-${index * 100}%)`;
        }, 3000);
    });
});

