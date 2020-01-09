
                  
$('.quality_carousel_inner').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  // Modal

   // Modal

   $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, #consultation').fadeOut('slow');
});

$('.button_mini').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').eq(i).text();
        $('.overlay, #order').fadeIn('slow');
    })
});

//ham
window.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav'),
  navLink = document.querySelectorAll('.nav_link'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      nav.classList.toggle('nav_active');
  });

  navLink.forEach(link => {
      link.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          nav.classList.toggle('nav_active');
      })
  })
})