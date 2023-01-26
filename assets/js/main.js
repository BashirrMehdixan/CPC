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
const contactEmail = document.querySelector(".contact-mail");
const contactMessage = document.querySelector(".contact-message");
const contactBtn = document.querySelector(".contact-btn");

// contactBtn.addEventListener("click", (e) => {
//     e.preventDefault()
//     switch (contactName.value) {
//         case "":
//             contactName.style.borderColor = "red";
//             contactName.nextElementSibling.classList.add("error")
//             break;
//     }

//     switch (contactEmail.value) {
//         case "":
//             contactEmail.style.borderColor = "red";
//             contactEmail.nextElementSibling.classList.add("error")
//             break;
//     }

//     switch (contactMessage.value) {
//         case "":
//             contactMessage.style.borderColor = "red";
//             contactMessage.nextElementSibling.classList.add("error")
//             break;
//     }
// })

const suggestionBtn = document.querySelector(".suggestions-btn");
const suggestionName = document.querySelector(".suggestions-name");
const suggestionNumber = document.querySelector(".suggestions-number");
const suggestionDate = document.querySelector(".suggestions-date");
const suggestionEmail = document.querySelector(".suggestions-mail");
const suggestionMessage = document.querySelector(".suggestions-msg");

// suggestionBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     switch (suggestionName.value) {
//         case "":
//             suggestionName.style.borderColor = "red";
//             suggestionName.nextElementSibling.classList.add("error")
//             break;
//     }

//     switch (suggestionEmail.value) {
//         case "":
//             suggestionEmail.style.borderColor = "red";
//             suggestionEmail.nextElementSibling.classList.add("error")
//             break;
//     }

//     switch (suggestionMessage.value) {
//         case "":
//             suggestionMessage.style.borderColor = "red";
//             suggestionMessage.nextElementSibling.classList.add("error")
//             break;
//     }
//     switch (suggestionDate.value) {
//         case "":
//             suggestionDate.style.borderColor = "red";
//             suggestionDate.nextElementSibling.classList.add("error")
//             break;
//     }
//     switch (suggestionNumber.value) {
//         case "":
//             suggestionNumber.style.borderColor = "red";
//             suggestionNumber.nextElementSibling.classList.add("error")
//             break;
//     }
// })

$("#contact-form").submit(function (event) {
    event.preventDefault();
    var empty = false;
    $("#contact-form :input").each(function () {
        if ($(this).val() == "") {
            $(this).siblings(".message").addClass("error");
            empty = true;
        } else {
            $(this).siblings(".message").removeClass("error");
            $(this).siblings(".message").text("");
        }
    });
});

$("#suggestions-form").submit(function (event) {
    event.preventDefault();
    var empty = false;
    $("#suggestions-form :input").each(function () {
        if ($(this).val() == "") {
            $(this).siblings(".message").addClass("error");
            empty = true;
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



