var a = 0;
function al() {
    if (a == 0) {
        document.getElementById("box").style.display = "block";
        a = 1;
    } else {
        document.getElementById("box").style.display = "none";
        a = 0;
    }
}
function alo() {
    if (a == 0) {
        document.getElementById("box1").style.display = "block";
        a = 1;
    } else {
        document.getElementById("box1").style.display = "none";
        a = 0;
    }
}

"use struct"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if(error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if(response.ok) {
                let result = await response.json();
                // alert(result.message);
                al();
                form.reset();
                form.classList.remove('_sending');
            } else {
                // alert("Ошибка!");
                alo();
                form.classList.remove('_sending');
            }
        }

    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if(emailValidate(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }  
        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailValidate(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});

//Анимация при прокрутке, работает с link: animate.min.js
$(function () {
    new WOW().init();
});

// Плавный переход якорей
$('a[href^="#"]').on('click', function (event) {
    event.preventDefault();

    var target = $(this.hash);
    $('html, body').stop().animate({
        'scrollTop': target.offset().top
    }, 1000);
});

// Slider ONE
$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: false, // Подстраивает высоту слайдера под каждое изображение
        slidesToShow: 1, //Сколько слайдов показывается
        slidesToScroll: 1, //Сколько слайдов пролистывается
        speed: 500, //Скорость пролистывания
        // easing: 'ease-in-out', //Тип пролистывания
        autoplay: false, //Автоматическая прокрутка
        autoplaySpeed: 5000, //Задержка автоматической прокрутки
        pauseOnFocus: true, //Пауза при клике
        pauseOnHover: true, //Пауза при наведении
        pauseOnDotsHover: true, //Пауза при наведении на точки
        draggable: false, //Перелистывание мышкой
        swipe: true, //Перелистывание на моб. устройствах
        touchThreshold: 10,
        touchMove: true, //Способность передвигать слайдер зажав мышь
        waitForAnimate: true, //Ожидание срабатывания анимации для следующего нажатия на кнопку
        responsive: [ //Позволяет изменять слайдер при опр ширине экрана
            {
                breakpoint: 768,
                settings: {
                    //!!Создать адаптив
                }
            }
        ]
    });
});
//Slider TWO
$(document).ready(function () {
    $('.team__slider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        cssEase: 'linear',
        adaptiveHeight: false, // Подстраивает высоту слайдера под каждое изображение
        slidesToShow: 3, //Сколько слайдов показывается
        slidesToScroll: 1, //Сколько слайдов пролистывается
        speed: 1000, //Скорость пролистывания
        // easing: 'ease-in-out', //Тип пролистывания
        autoplay: false, //Автоматическая прокрутка
        autoplaySpeed: 3000, //Задержка автоматической прокрутки
        pauseOnFocus: true, //Пауза при клике
        pauseOnHover: true, //Пауза при наведении
        pauseOnDotsHover: true, //Пауза при наведении на точки
        draggable: true, //Перелистывание мышкой
        swipe: true, //Перелистывание на моб. устройствах
        touchThreshold: 10,
        touchMove: true, //Способность передвигать слайдер зажав мышь
        waitForAnimate: true, //Ожидание срабатывания анимации для следующего нажатия на кнопку
        responsive: [ //Позволяет изменять слайдер при опр ширине экрана
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2
                }
            },{
                breakpoint: 740,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
//Slider THREE
$(document).ready(function () {
    $('.review__slider').slick({
        arrows: true,
        dots: true,
        infinite: false,
        cssEase: 'linear',
        adaptiveHeight: false, // Подстраивает высоту слайдера под каждое изображение
        slidesToShow: 2, //Сколько слайдов показывается
        slidesToScroll: 2, //Сколько слайдов пролистывается
        speed: 300, //Скорость пролистывания
        // easing: 'ease-in-out', //Тип пролистывания
        autoplay: false, //Автоматическая прокрутка
        autoplaySpeed: 5000, //Задержка автоматической прокрутки
        pauseOnFocus: true, //Пауза при клике
        pauseOnHover: true, //Пауза при наведении
        pauseOnDotsHover: true, //Пауза при наведении на точки
        draggable: false, //Перелистывание мышкой
        swipe: true, //Перелистывание на моб. устройствах
        touchThreshold: 10,
        touchMove: true, //Способность передвигать слайдер зажав мышь
        waitForAnimate: true, //Ожидание срабатывания анимации для следующего нажатия на кнопку
        responsive: [ //Позволяет изменять слайдер при опр ширине экрана
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// POP-UP
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}
function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}
function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapp').offsetWidth + 'px';

    for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}
function bodyUnlock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}
document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});
(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

// Burger
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        // bodyLock()
    });
});

$(document).ready(function () {
    $('.header__list').click(function (event) {
        $('.header__burger,.header__menu').removeClass('active');
        $('body').removeClass('lock');
        // bodyUnlock()
    });
});