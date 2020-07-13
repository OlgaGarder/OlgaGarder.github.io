window.addEventListener('DOMContentLoaded', function() {
    
//npx webpack

    // Tabs
    
	let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {
        
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
	}

	function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    
    hideTabContent();
    showTabContent();

	tabsParent.addEventListener('click', function(event) {
		const target = event.target;
		if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
		}
    });
    
    // Timer

    const deadline = '2020-05-11';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '' ) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });

     const modalTimerId = setTimeout(openModal, 50000);
    // Закомментировал, чтобы не отвлекало

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);

    // Используем классы для создание карточек меню

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH(); 
        }

        changeToUAH() {
            this.price = this.price * this.transfer; 
        }

        render() {
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    const getResource = async (url) => { // получает данные с сервера, ассинх код
        const res = await fetch(url); 

        if(!res.ok) {
            throw new Error(`could not fetch ${url} , status: ${res.status}`);
        }

        //обработка promise трансформация в json
        return await res.json();
    };

    // 1 способ

    getResource('http://localhost:3000/menu')
        .then(data => {
           data.forEach( ({img,altimg,title,descr,price}) => {
              new MenuCard(img, altimg, title, descr, price , '.menu .container').render(); //этот конструктор будет создаваться столько раз сколько обьектов внутри db.json массива
           });
        });

  

    //new MenuCard(
       // "img/tabs/vegy.jpg",
       // "vegy",
       // 'Меню "Фитнес"',
       // 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
       // 9,
      //  ".menu .container"
    //).render();

    //new MenuCard(
       // "img/tabs/post.jpg",
       // "post",
       // 'Меню "Постное"',
        //'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
       // 14,
      //  ".menu .container"
   // ).render();

   // new MenuCard(
      //  "img/tabs/elite.jpg",
        //"elite",
       // 'Меню “Премиум”',
       // 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
       // 21,
       // ".menu .container"
   // ).render();

    //forms ajax

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так..'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    //es8 async/await

    const postData = async (url, data) => { // получает данные с сервера, ассинх код
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        //обработка promise трансформация в json
        return await res.json();
    };

    function bindPostData(form) { // привязка постинга данных 
        form.addEventListener('submit' , (e) =>{
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText= `
                display:block;
                margin: 0 auto;
            ` //стили для спинера
            form.insertAdjacentElement('afterend' , statusMessage );

            //const request = new XMLHttpRequest(); - устаревший способ 
           // request.open('POST', 'server.php');

          
            //request.setRequestHeader('Content-type', 'application/json'); // устаревший способ
            const formData = new FormData(form);

            //const object = {};
            //formData.forEach(function(value, key){
               // object[key] = value;
            //})
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
           // const json = JSON.stringify(object);

            //fetch( 'server.php', {
                //method: "POST",
                //headers: {
                 //   'Content-type': 'application/json'
               // },
               // body: JSON.stringify(object)
         //  })
           postData('http://localhost:3000/requests',json )
           .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
           }).catch( () => {
                showThanksModal(message.failure);
           }).finally(() => {
                form.reset(); //очистка формы
           })

            //request.send(json);

           // request.addEventListener('load', () => {
                //if (request.status === 200){
                   // console.log(request.response);
                   // showThanksModal(message.success);
                   // form.reset(); //очистка формы
                   // statusMessage.remove();
               // } else {
                   // showThanksModal(message.failure);
               // }
           // });

        });
    }

    function showThanksModal(message){
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide'); //скрыли
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);

//возвращение прежней формы и прежнего функционала после манипуляций

        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }
    
    // Fetch API

    //fetch('https://jsonplaceholder.typicode.com/posts', {
      // method: "POST",
       //body: JSON.stringify({name: 'Alex'}),
       //headers:  {
          //  'Content-type': 'application/json'
       //}

    //})
    //.then(response => response.json()) // этот метод превратит данные из формата json в обычный скрипт , который возвращает promise
    //.then(json => console.log(json)) //здесь мы получаем обычный обьект 

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));



    // Slider

    let slideIndex = 1;
    const slides = document.querySelectorAll('.offer__slide'),
        slider = document.querySelector('.offer__slider'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');

    showSlides(slideIndex);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block'; // Как ваша самостоятельная работа - переписать на использование классов show/hide
        
        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }
    }
    
    slider.style.position = 'relative'; // создвем точки для слайда

    const indecators = document.createElement('ol'),
        dots = [];
    indecators.classList.add('carousel-indicators');
    indecators.style.cssText= `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;

    slider.append(indecators);

    for ( let i = 0; i < slides.length; i++ ) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1 )
        dot.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
        `;
        if (i==0) {
            dot.style.opacity = 1; //класс активности точек
        }
        indecators.append(dot);
        dots.push(dot);
    }

    function plusSlides (n) {
        showSlides(slideIndex += n);

    }

    prev.addEventListener('click', function(){
        plusSlides(-1);

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1 ].style.opacity = 1;
    });

    next.addEventListener('click', function(){
        plusSlides(1);

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1 ].style.opacity = 1;
    });

    dots.forEach( dot => {
        dot.addEventListener( 'click' , (e) => {
            const  slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            slideIndex = slides.length - slideTo - 1;
        })
    })


    /// Calculating  fit

    const result = document.querySelector('.calculating__result span');

    let sex = 'female',
     height, weight, age, 
     ratio = 1.375;

     if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 'female';
        localStorage.setItem('ratio', '1.375');
    }

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if(elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }
            if(elem.getAttribute('data-ratio') === localStorage.getItem('ratio')){
                elem.classList.add(activeClass);
            }
        });
    }

    initLocalSettings('#gender div' , 'calculating__choose-item_active' );
    initLocalSettings('.calculating__choose_big div' , 'calculating__choose-item_active' );


    function calcTotal() { //пише условие,если хоть одно поле не будет запол ,то подсчет не выведется
        if (!sex || !height || !weight || !age || !ratio){
            result.textContent = '____';
            return;
        }

        // а если все запол , то пишем след усл 

        if ( sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector); // буду получать все div

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if(e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex' ,e.target.getAttribute('id'));
                }
    
                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
    
                e.target.classList.add(activeClass);
    
                calcTotal();
            });
        })

    }

    getStaticInformation('#gender div' , 'calculating__choose-item_active' );
    getStaticInformation('.calculating__choose_big div' , 'calculating__choose-item_active' );


    //функция обработки input 

    function getDynamicInformation (selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {

            if(input.value.match(/\D/g)) { // Наше условие , если польх ввел не число
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }

            switch(input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }


            calcTotal();
        });
    }
    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
});