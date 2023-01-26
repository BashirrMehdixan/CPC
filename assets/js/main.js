const leftNavBtn = document.querySelector('.left-nav-btn');
const leftNav = document.querySelector('.left-nav');
const overLaymenu = document.querySelector('.overlay-menu-box');
const mobileNavBtn = document.querySelector('.mobile-nav-btn');

leftNavBtn.addEventListener('click', () => {
    leftNav.classList.toggle('active');
    overLaymenu.classList.toggle('opened');
    document.querySelector('body').classList.toggle('over');
});

mobileNavBtn.addEventListener('click', () => {
    mobileNavBtn.classList.toggle('active');
    overLaymenu.classList.toggle('opened');
    document.querySelector('body').classList.toggle('over');
})

const pageSwiper = new Swiper('.page-swiper', {
    spaceBetween: 140,
    simulateTouch: false,
    navigation: {
        nextEl: '.swiper-button-next',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 200,

        }
    }
});
const catalogSwiper = new Swiper('.catalog-swiper', {
    autoHeight: true,
    slidesPerView: 4,
    simulateTouch: true,
    mousewheel: {
        invert: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 200,

        },
        549: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1144: {
            slidesPerView: 4,
        }
    }
});

const contactSwiper = new Swiper('.contact-swiper', {
    autoHeight: true,
    slidesPerView: 1,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

// Form Validation
const contactForm = document.querySelector("#contact-form");
const contactName = document.querySelector(".contact-name");
const contactEmail = document.querySelector(".contact-email");
const contactMessage = document.querySelector(".contact-message");
const contactBtn = document.querySelector(".contact-btn");

contactBtn.addEventListener("click", () => {
    console.log(contactName.value == "")
    switch(contactName) {
        case contactName.value == "": 
        contactName.style.backgroundColor = "red";
        break;
        default:  
        contactName.style.background = "green";
    }
})



