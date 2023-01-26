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


$("#contact-form").submit(function (event) {
    event.preventDefault();
    $("#contact-form :input").each(function () {
        if ($(this).val() == "") {
            $(this).siblings(".message").addClass("error")
            $(this).siblings(".message").text("Bu xana boş buraxıla bilməz");
        } else {
            $(this).siblings(".message").removeClass("error");
            $(this).siblings(".message").text("");
        }
    });
});

$("#suggestions-form").submit(function (event) {
    event.preventDefault();
    $("#suggestions-form :input").each(function () {
        if ($(this).val() == "") {
            $(this).siblings(".message").addClass("error")
            $(this).siblings(".message").text("Bu xana boş buraxıla bilməz");
        } else {
            $(this).siblings(".message").removeClass("error");
            $(this).siblings(".message").text("");
        }
    });
});

$(".satisfaction").submit(function (event) {
    event.preventDefault();
    var empty = false;
    $(".satisfaction :input").each(function () {
        if ($(this).val() == "") {
            $(this).siblings(".message").addClass("error").text("Bu xana boş buraxıla bilməz");
            empty = true;
        } else {
            $(this).siblings(".message").removeClass("error");
            $(this).siblings(".message").text("");
        }
    });
    $(".satisfaction select").each(function () {
        var selectedValue = $(this).val();
        var errorLabel = $(".error-select");
        if (!selectedValue || selectedValue == "") {
            $(errorLabel).addClass("error").text("Qiymətləndirmə boş buraxıla bilməz");
        } else {
            $(errorLabel).text("").removeClass("error")
        }
    })
});



