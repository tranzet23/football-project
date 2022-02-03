//Home slider

const homeSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 900,
    nextArrow: $('.home__next'),
    prevArrow: $('.home__prev')
}

sliderInit('.home__slider-inner', homeSliderSettings, true, false);



//Trainer slider

const trainer_1_SliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 900,
    nextArrow: $('.trainer__next_1'),
    prevArrow: $('.trainer__prev_1')
}

sliderInit('.trainer__slider-inner', trainer_1_SliderSettings);



//Trainer slider_2

const trainer_2_SliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 900,
    nextArrow: $('.trainer__next_2'),
    prevArrow: $('.trainer__prev_2')
}

sliderInit('.trainer__slider-inner_2', trainer_2_SliderSettings);



//Trainer slider_3

const trainer_3_SliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 900,
    nextArrow: $('.trainer__next_3'),
    prevArrow: $('.trainer__prev_3')
}

sliderInit('.trainer__slider-inner_3', trainer_3_SliderSettings);



//Trainer slider_4

const trainer_4_SliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 900,
    nextArrow: $('.trainer__next_4'),
    prevArrow: $('.trainer__prev_4')
}

sliderInit('.trainer__slider-inner_4', trainer_4_SliderSettings);




// Location slider

const locationSliderSettings = {
    autoplay: true,
    fade: true,
    speed: 900,
    nextArrow: $('.location__next'),
    prevArrow: $('.location__prev')
}

sliderInit('.slider-location__inner', locationSliderSettings);



//  Reviews slider

const reviewsSliderSettings = {
    // autoplay: true,
    fade: true,
    speed: 400,
    nextArrow: $('.reviews__next'),
    prevArrow: $('.reviews__prev')
}

if ($(window).width() > 615) {
    sliderInit('.reviews__slider-inner', reviewsSliderSettings, true, false);
} else {
    sliderInit('.reviews__slider-inner', reviewsSliderSettings);
}



//  Represent slider

const RepresentSliderSettings = {
    rows: 1,
    slidesToShow: 8,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    nextArrow: $('.representatives__next'),
    prevArrow: $('.representatives__prev'),
    responsive: [
    {
        breakpoint: 1500,
        settings: {
            rows: 2,
            slidesToShow: 6,
        },
    },
    {
        breakpoint: 1024,
        settings: {
            rows: 1,
            slidesToShow: 5,
        },
    },
    {
        breakpoint: 850,
        settings: {
            rows: 1,
            slidesToShow: 4,
        },
    },
    {
        breakpoint: 600,
        settings: {
            autoplay: true,
            rows: 1,
            slidesToShow: 3,
        },
    },
    ]
}

sliderInit('.representatives__slider-inner', RepresentSliderSettings);




//  our__trainers slider

const TrainersSliderSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    // autoplay: true,
    speed: 400,
    nextArrow: $('.trainers__next'),
    prevArrow: $('.trainers__prev'),
    responsive: [
    {
        breakpoint: 1750,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            adaptiveHeight: true,
        },
    },
    {
        breakpoint: 1370,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        },
    },
    {
        breakpoint: 950,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        },
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
    },
    ],
}

sliderInit('.our_trainers__items', TrainersSliderSettings);




// Expects slider

const expectsSliderSettings = {
    // autoplay: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: $('.expects__next'),
    prevArrow: $('.expects__prev'),
    responsive: [
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
    },
    ]
}
sliderInit('.expects__slider-inner', expectsSliderSettings);



// Program slider

const programSliderSettings = {
    // autoplay: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: $('.program__next'),
    prevArrow: $('.program__prev'),
    responsive: [
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
    },
    ]
}

sliderInit('.program__slider-inner', programSliderSettings);




// Camp slider

const campSliderSettings = {
    // autoplay: true,
    rows: 2,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: $('.camp__next'),
    prevArrow: $('.camp__prev'),
    responsive: [
    {
        breakpoint: 1024,
        settings: {
            rows: 2,
            slidesToShow: 2,
            slidesToScroll: 1,
        },
    },
    {
        breakpoint: 769,
        settings: {

            slidesToShow: 1,
            slidesToScroll: 1,
        },
    },
    ]
}

sliderInit('.camp__slider_inner', campSliderSettings);




// Schedule slider

const scheduleSliderSettings = {
    slidesToShow: 3,
    infinite: false,
    nextArrow: $('.schedule__next'),
    prevArrow: $('.schedule__prev'),
    responsive: [
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
        },
    },
    ]
}

sliderInit('.schedule__inner', scheduleSliderSettings, false, false);



// Hero slider
const heroSliderSettings = {
    // autoplay: true,
    fade: true,
    speed: 900,
    nextArrow: $('.hero__next'),
    prevArrow: $('.hero__prev')
}

sliderInit('.slider-hero__inner', heroSliderSettings);


function sliderInit(selector, settings = {}, hasCounter = true, hasLine = true) {
    let sliderInner = $(selector);
    let parentSection = sliderInner.closest('section');
    let sliderLineCurrent =  parentSection.find('.line');

    if (hasCounter) {
        sliderInner.on('init beforeChange', function (event, slick, currentSlide, nextSlide) {
            let index = nextSlide ? nextSlide + 1 : 1;
            let totalSlides = slick.slideCount;
            let num1 = parentSection.find('.line__number1');
            let num2 = parentSection.find('.line__number2');

            num1.text('0' + index);
            num2.text('0' + totalSlides);

            if (hasLine) {
                sliderLine(index, totalSlides, sliderLineCurrent);
            }

        });
    }

    sliderInner.slick(settings);
}


function sliderLine(currentSlide, totalSlides, lineEl) {
    let width = (currentSlide / totalSlides) * 100;

    lineEl.css({'width': width + '%'});
}
