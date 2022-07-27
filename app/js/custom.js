$(document).ready(function () {

    var bannersSlider = $('.banners__slides').owlCarousel({
        smartSpeed: 800,
        loop: true,
        margin: 30,
        items: 1,
        dots: false,
        responsive: {
            0: {
                margin: 20
            },
            550: {
                margin: 30
            }
        }
    });
    const slider = document.querySelector('.dop__all');
    const slider2 = document.querySelector('.gallery__all');

    let isDown = false;
    let startX;
    let scrollLeft;
    let isDown2 = false;
    let startX2;
    let scrollLeft2;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider2.addEventListener('mousedown', (e) => {
        isDown2 = true;
        slider2.classList.add('active');
        startX2 = e.pageX - slider2.offsetLeft;
        scrollLeft2 = slider2.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider2.addEventListener('mouseleave', () => {
        isDown2 = false;
        slider2.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider2.addEventListener('mouseup', () => {
        isDown2 = false;
        slider2.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX); //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        console.log(walk);
    });
    slider2.addEventListener('mousemove', (e) => {
        if (!isDown2) return;
        e.preventDefault();
        const x2 = e.pageX - slider2.offsetLeft;
        const walk2 = (x2 - startX2); //scroll-fast
        slider2.scrollLeft = scrollLeft2 - walk2;
    });
    var readySlider = $('.ready__slider').owlCarousel({
        smartSpeed: 800,
        loop: true,
        margin: 30,
        items: 1,
        dots: false,
        responsive: {
            0: {
                margin: 20
            },
            550: {
                margin: 20
            },
            768: {
                margin: 0
            }
        }
    });
    var optionsSlider = $('.options__wrap').owlCarousel({
        smartSpeed: 800,
        loop: false,
        margin: 30,
        items: 1,
        dots: false,
        responsive: {
            0: {
                items: 1,
                margin: 30
            },
            575: {
                items: 1,
                margin: 30
            },
            768: {
                items: 2,
                margin: 30
            },
            992: {
                items: 3,
                margin: 30
            }
        }
    });
    var reviewsSlider = $('.reviews__slider').owlCarousel({
        smartSpeed: 800,
        loop: true,
        margin: 30,
        items: 1,
        dots: false,
        responsive: {
            0: {
                margin: 20
            },
            768: {
                items: 2,
                margin: 30
            },
            1200: {
                items: 3,
                margin: 30
            }
        }
    });

    var sertsSlider = $('.serts__slider').owlCarousel({
        smartSpeed: 800,
        loop: true,
        margin: 30,
        items: 1,
        center: false,
        dots: false,
        autoWidth: false,
        responsive: {
            0: {
                autoWidth: false,
                items: 1,
                margin: 10
            },
            576: {
                autoWidth: false,
                items: 1,
                center: true,
                margin: 20
            },
            768: {
                autoWidth: false,
                items: 1,
                center: true,
                margin: 30
            },
            992: {
                autoWidth: true,
                center: true,
                items: 3
            }
        }
    });

    $('.serts__next').click(function () {
        sertsSlider.trigger('next.owl.carousel');
    });

    $('.serts__prev').click(function () {
        sertsSlider.trigger('prev.owl.carousel');
    });
    $('.reviews__next').click(function () {
        reviewsSlider.trigger('next.owl.carousel');
    });

    $('.reviews__prev').click(function () {
        reviewsSlider.trigger('prev.owl.carousel');
    });

    $('.ready .slider__next').click(function () {
        readySlider.trigger('next.owl.carousel');
    });

    $('.ready .slider__prev').click(function () {
        readySlider.trigger('prev.owl.carousel');
    });
    $('.banners__slider .slider__next').click(function () {
        bannersSlider.trigger('next.owl.carousel');
    });

    $('.banners__slider .slider__prev').click(function () {
        bannersSlider.trigger('prev.owl.carousel');
    });

    $('body').on('click', function () {
        $('.search-link').removeClass('open');
        $('.search').slideUp();
    });

    $('.search-link').on('click', function (e) {
        e.stopPropagation();
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.search').slideUp();
        } else {
            $(this).addClass('open');
            $('.search').slideDown();
        }
    });

    $('.search').on('click', function (e) {
        e.stopPropagation();
    });

    $('.menu-btn').on('click', function () {
        $('.menu-overlay').fadeIn();
        $('.menu').addClass('open');
        $('html').height($(window).height()).css('overflow', 'hidden');
        $('.page-wrap').css('overflow', 'scroll');
    });

    $('.menu__close, .menu-overlay').on('click', function () {
        $('.menu-overlay').fadeOut();
        $('.menu').removeClass('open');
        $('.page-wrap').css('overflow', 'hidden');
        $('html').css('overflow', 'auto');
    });

    // nastya

    $('.exhibit__slider-for').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        dotsContainer: '.exhibit__slider-nav',
        margin: 30,
        responsive: {
            0: {
                margin: 20
            },
            550: {
                margin: 30
            }
        }
    })

    $('.exhibit__slider-box').click(function () {
        $('.exhibit__slider-for').trigger('to.owl.carousel', [$(this).index(), 300]);
    })

    $("input[type='tel']").mask("+7 (999)-999-99-99");

    $('.tinge__add').click(function () {

        $('.peculiar').fadeIn();

        var tingePicker = new iro.ColorPicker(".peculiar__picker", {
            width: $('.peculiar__picker').width(),
            color: "rgb(255, 255, 255)",
        });

        $('.peculiar__own').css('background', tingePicker.color.hexString);
        $('.peculiar__value').text(tingePicker.color.hexString);

        tingePicker.on('color:change', function (color) {
            $('.peculiar__own').css('background', color.hexString);
            $('.peculiar__value').text(tingePicker.color.hexString);
        });

        $('.peculiar__close').click(function () {
            $('.peculiar').fadeOut();
            $(this).parents('.peculiar').find('.IroColorPicker').remove();
        });

        $('.peculiar__btn').click(function () {
            var extra = $('.tinge__caudal');
            var template = extra.find('.tinge__variant.hide').clone();
            template.removeClass('hide');
            extra.find('.tinge__variant.hide').remove();

            var extraItem = template.clone();
            extra.append(extraItem);
            extra.find('.tinge__item').css('background', tingePicker.color.hexString);
            $(extra.find('.tinge__variant')).index()

            console.log($(extra.find('.tinge__variant')).index())

            $('.peculiar').fadeOut();
            $(this).parents('.peculiar').find('.IroColorPicker').remove();
        });
    })

    // минимальная высота акций
    $('.stock__content').each(function () {
        var h_block = parseInt($(this).height());
        $('.stock__content').css('min-height', h_block);
    });

    $('[data-fancybox]').fancybox({
        hash: false,
        touch: false,
        infobar: true,
        autoFocus: false,
    });
    $('.popup__close').on('click', function () {
        $.fancybox.close();
    });

    formSubmit();

});

var diversityPicker = new iro.ColorPicker(".diversity__picker", {
    width: $('.diversity__picker').width(),
    color: "rgb(255, 0, 0)",
    layout: [
        {
            component: iro.ui.Slider,
            options: {
                sliderType: 'hue'
            }
        },
    ]
});

$('.diversity__view').css('background', diversityPicker.color.hexString);

diversityPicker.on('color:change', function (color) {
    $('.diversity__view').css('background', color.hexString);
    $('.diversity__picker .IroHandle ').css('background', diversityPicker.color.hexString);
});

let idx = 0,
    idxStep = 0;

function changeStep() {
    let mass = $('.meccano__mass').eq(idx),
        step = $('.meccano__step').eq(idx);

    mass.addClass('active');
    step.addClass('active');
    step.removeClass('old');
    mass.siblings().removeClass('active');
    mass.siblings().removeClass('invalid');
    step.siblings().removeClass('active');
    step.siblings().removeClass('old');

    $('.meccano__step').each(function (i, e) {
        if (i <= idxStep) {
            $(e).addClass('old');
        }
    });

    $('.meccano__result span').text(idx + 1)
}

function checkRequired(mass) {
    let required = mass.find('[data-required]'),
        em = 0;
    if (required.length > 0) {
        switch (required[0].type) {
            case 'textarea':
            case 'text':
            case 'email':
            case 'tel':
                if (required.val() == '') {
                    em++;
                }
                break;
            case 'radio':
                let name = required[0].name;
                if ($('[name="' + name + '"]:checked').length < 1) {
                    em++;
                }
                break;
        }
    }
    if (em > 0) {
        return false;
    }
    return true;
}

$(document).on('click', '.meccano__next, .meccano__back', function (e) {
    e.preventDefault();
    let th = $(this);

    switch (th.hasClass('meccano__next')) {
        case true:
            if (!checkRequired($('.meccano__mass.active'))) {
                $('.meccano__mass.active').addClass('invalid');
                return false;
            }
            idx++;
            if (idx > idxStep) {
                idxStep++
            }
            break;
        default:
            idx--;
            break;
    }
    changeStep();
});

// Отправка формы
function formSubmit() {

    $(".form button[type='submit']").on('click', function (e) {
        e.preventDefault();
        var form = $(this).closest('form');
        var form_data = form.serialize();
        var field = form.find('input[required], textarea[required], select[required]');
        var email = form.find("input[required][type='email']");
        var checkbox = form.find("input[required][type='checkbox']");

        empty = 0;

        checkbox.each(function (index, element) {
            if ($(this).prop("checked") == false) {
                $(this).val("")
                $(this).addClass('invalid');
                setTimeout(function () {
                    $(this).removeClass('invalid')
                }.bind(this), 2000);
            } else {
                $(this).val("valid")
                $(this).removeClass('invalid');
                $(this).addClass('valid');
            }
        });

        field.each(function () {
            if ($(this).val() == "") {
                $(this).addClass('invalid');
                setTimeout(function () {
                    $(this).removeClass('invalid')
                }.bind(this), 2000);
                empty++;
            } else {
                $(this).removeClass('invalid');
                $(this).addClass('valid');
            }
        });

        email.each(function () {
            if ($(this).val() == "") {
                $(this).addClass('invalid');
                setTimeout(function () {
                    $(this).removeClass('invalid')
                }.bind(this), 2000);
            } else {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if (pattern.test($(this).val())) {
                    $(this).removeClass('invalid');
                    $(this).addClass('valid');
                } else {
                    $(this).addClass('invalid');
                    setTimeout(function () {
                        $(this).removeClass('invalid')
                    }.bind(this), 2000);
                    $(this).removeClass('valid');
                    empty++;
                }
            }
        });

        if (empty > 0) {
            return false;
        } else {
            $.ajax({
                type: "POST",
                dataType: "html",
                data: form_data,
                url: "php/mail.php",
                success: function (response) {
                    console.log('success');
                    form.find('.form__body').addClass('hide')
                    form.find('.form__thanks').addClass('show')
                },
                error: function (response) {
                    console.log('error');
                    form.find('.form__body').addClass('hide')
                    form.find('.form__thanks').addClass('show')
                }
            });
        }
    });
    // var $frame = $('.frame__wrap');
    // var $slidee = $('.frame');
    // var $wrap = $frame.parent();
    // $frame.sly({
    //     horizontal: 1,
    //     itemNav: 'basic',
    //     smart: 1,
    //     scrollSource: null,
    //     activateOn: 'click',
    //     mouseDragging: 1,
    //     touchDragging: 1,
    //     releaseSwing: 1,
    //     startAt: 0,
    //     scrollBar: $wrap.find('.scrollbar'),
    //     scrollBy: 1,
    //     speed: 3000,
    //     elasticBounds: 1,
    //     easing: 'easeOutExpo',
    //     dragHandle: 1,
    //     dynamicHandle: 1,
    //     clickBar: 1
    // });
}