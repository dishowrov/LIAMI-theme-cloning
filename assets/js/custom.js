
// Home page's hero slider section
$('.home-hero-slider').slick({
  arrows: true,
  dots: true,
  initialSlide: 0,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay: false,
  autoplaySpeed: 5000,
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  speed: 3000,
  draggable: true,
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  prevArrow:
    "<button type='button' class='slick-arrow prev-arrow'> <i class='fa-solid fa-angle-left'></i> </button>",
  nextArrow:
    "<button type='button' class='slick-arrow next-arrow'> <i class='fa-solid fa-angle-right'></i> </button>",
  responsive: [
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
      },
    },
  ],
});

$(".home-hero-slider").on(
  "afterChange",
  function (event, slick, currentSlide) {
    $(".slick-active .hero-item-info > *").removeClass("hidden");
    $(".slick-active .hero-item-info > *").addClass("animated fadeInUp");
  }
);

$(".home-hero-slider").on(
  "beforeChange",
  function (event, slick, currentSlide) {
    $(".slick-active .hero-item-info > *").removeClass("animated fadeInUp");
    $(".slick-active .hero-item-info > *").addClass("hidden");
  }
);


// Home page's Reviews slider
$('.slider-for').slick({
  slidesToShow: 1,
  arrows: false,
  asNavFor: '.slider-nav',
  infinite: true,
  fade: true
});

$('.slider-nav').slick({
  slidesToShow: 2,
  asNavFor: '.slider-for',
  focusOnSelect: true,
  autoplay: false,
  infinite: true,
  arrows: true,
  prevArrow:
    "<button type='button' class='slick-arrow prev-arrow'> <i class='fa-solid fa-angle-left'></i> </button>",
  nextArrow:
    "<button type='button' class='slick-arrow next-arrow'> <i class='fa-solid fa-angle-right'></i> </button>",
});

// Home page's New Arrival section's functionality
$('.new-arrivals-slider').slick({
  dots: true,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4500,
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  prevArrow:
    "<button type='button' class='slick-arrow prev-arrow'> <i class='fa-solid fa-angle-left'></i> </button>",
  nextArrow:
    "<button type='button' class='slick-arrow next-arrow'> <i class='fa-solid fa-angle-right'></i> </button>",
});



// Products page's products slider section
$('.products-slider').slick({
  dots: true,
  arrows: true,
  infinite: false,
  speed: 999,
  slidesToShow: 1,
  slidesToScroll: 1,
});



// Product single item page's products slider functionality
$('.slider-nav-imgs').slick({
  slidesToShow: 4,
  asNavFor: '.slider-main-imgs',
  vertical: true,
  focusOnSelect: true,
  autoplay: false,
  slidesToShow: 3,
  arrows: false,
  infinite: true,
});

$('.slider-main-imgs').slick({
  slidesToShow: 1,
  arrows: false,
  asNavFor: '.slider-nav-imgs',
  vertical: true,
  verticalSwiping: true,
  infinite: true,
});


