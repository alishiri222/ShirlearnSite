document.addEventListener("DOMContentLoaded", function () {

    const el = document.querySelector('.typed');
    if (!el) return;


    const items = el.getAttribute('data-typed-items');
    const strings = items.split(',').map(s => s.trim());

    // مقداردهی کتابخانه Typed.js
    new Typed('.typed', {
        strings: strings,
        typeSpeed: 70,     // سرعت تایپ
        backSpeed: 40,     // سرعت پاک کردن
        backDelay: 1000,   // مکث بین کلمات
        startDelay: 200,   // تأخیر اولیه
        loop: true,        // تکرار بی‌نهایت
        smartBackspace: true,
        showCursor: true, // چون cursor خودمون داریم
    });

});


document.addEventListener("DOMContentLoaded", () => {

    const swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 1000,  // هر ۲.۵ ثانیه اسلاید بعدی
            disableOnInteraction: false, // بعد از لمس یا کلیک هم ادامه بده
        },

        breakpoints: {
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 }
        }
    });

});

