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
    autoHeight: true,
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

const productsSwiper = new Swiper('.products-page-swiper', {
    autoHeight: true,
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
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 200,
        }
    }
});

const productSwiper = new Swiper('.product-swiper', {
    autoHeight: true,
    slidesPerView: 4,
    mousewheel: {
        invert: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 100,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 15,
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