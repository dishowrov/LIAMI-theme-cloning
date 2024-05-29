
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
      "<button type='button' class='slick-prev'> agor </button>",
    nextArrow:
      "<button type='button' class='slick-next'> bador </button>",
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



// Products page's products slider section
$('.products-slider').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 999,
    slidesToShow: 1,
    slidesToScroll: 1,
});