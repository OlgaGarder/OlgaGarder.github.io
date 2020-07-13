//window.addEventListener('DOMContentLoaded' , function(){
    //создаем карточки услуг

    //class ServicesCard {
        constructor (src, alt, title ,  text , subtitle, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.text = text;
            this.parent = document.querySelector(parentSelector);
            this.subtitle= subtitle;
        }

        render () {
            const element = document.createElement('div');
            element.innerHTML = `
            <div class="cart">
                <img src=${this.src} alt=${this.alt}>
                <p class="title">${this.title} <span></span></p>
                <p class="text">${this.text} 
                <span class="sub_title">${this.subtitle}</span></p>
            </div>
            `;
            this.parent.append(element);
        }
    }

    new ServicesCard (
        "img/icon/about12.jpg",
        "diagnostoka" ,
        "Диагностика" ,
        "Полный перечень",
        "диагностических услуг",
        ".services .block"
    ).render();

    new ServicesCard (
        "img/icon/about1.png",
        "proffessional",
        "Профессиональная гигиена",
        "Чистка и полировка зубов",
        "устранение зубного налета",
        ".services .block"
    ).render();

    new ServicesCard (
        "img/icon/about2.png",
        "otbelivanie",
        "Отбеливание зубов",
        "Отбеливание зубов",
        "лампой Philips Zoom 4",
        ".services .block"
    ).render();

    new ServicesCard (
        "img/icon/about3.png",
        "restavraci",
        "Реставрация зубов",
        "Восстановление сколов",
        "и повреждений зубов",
        ".services .block"
    ).render();

    new ServicesCard (
        "img/icon/about4.png",
        "lechenie",
        "Лечение кариеса",
        "Профилактика заболеваний",
        "и лечение зубов",
        ".services .block_two"
    ).render();

    new ServicesCard (
        "img/icon/about5.png",
        "lechenie",
        "Лечение каналов",
        "Сохранение «безнадежных» ",
        "зубов, назначенных на удаление",
        ".services .block_two"
    ).render();

    new ServicesCard (
        "img/icon/about6.png",
        "lechenie",
        "Удаление зубов",
        "Удаление зубов без боли.",
        "Быстро и эффективно",
        ".services .block_two"
    ).render();

    new ServicesCard (
        "img/icon/about7.png",
        "lechenie",
        "Имплантация зубов",
        "Установка имплантов ",
        "с пожизненным сроком службы",
        ".services .block_two"
    ).render();

    new ServicesCard (
        "img/icon/about8.png",
        "lechenie",
        "Установка коронок",
        "Установка коронок ",
        "высокого качества",
        ".services .block_free"
    ).render();

    new ServicesCard (
        "img/icon/about9.png",
        "lechenie",
        "Установка виниров",
        "Реставрация, исправление ",
        "цвета и формы зубов",
        ".services .block_free"
    ).render();

    new ServicesCard (
        "img/icon/about10.png",
        "lechenie",
        "Зубные протезы",
        "Протезирование зубов",
        "современными материалами",
        ".services .block_free"
    ).render();

    new ServicesCard (
        "img/icon/about11.png",
        "lechenie",
        "Ортондонтия",
        "Исправление прикуса у детей и взрослых. ",
        "Установка брекетов",
        ".services .block_free"
    ).render();

}); //