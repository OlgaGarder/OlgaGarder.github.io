window.addEventListener('DOMContentLoaded', function() {

    //Tabs

    let tabs = document.querySelectorAll('.about__tabs'),
        tabsContent = document.querySelectorAll('.about__content'),
        tabsParent = document.querySelector('.about__block');

    function hideTabContent() {

        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('about__tabs_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('about__tabs_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', function(event) {
        const target = event.target;
        if(target && target.classList.contains('about__tabs')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    let number = document.querySelector('.counter__clen-number'),
        numberTop = number.getBoundingClientRect().top,
        start = +number.innerHTML, end = +number.dataset.max;

        window.addEventListener('scroll', function onScroll () {
            if(window.pageYOffset > numberTop - window.innerHeight / 
                20) {
                    this.removeEventListener('scroll', onScroll);
                    let interval = setInterval( function() {
                        number.innerHTML = ++start;
                        if (start == end) {
                            clearInterval(interval);
                        }
                }, 0);
            }
        });

        $('.reviews__carousel-inner').slick({
            speed: 1200,
           
            prevArrow: '<button type="button" class="slick-prev"><img src="icons/prv_left.png"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="icons/prv__rigtht.png"></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        dots: false,
                        arrows: false
                    }
                }
            ]
        });
});