



var swiper = new Swiper('.mySwiper' ,{
    slidesPerView:2,
    spaceBetween:30,

    loop:true,
    autoplay:{
        delay:1500,
    },

    breakpoints:{
        1000:{
            slidesPerView:2,
            spaceBetween:30,
        },
        900:{
            slidesPerView:1,
            spaceBetween:10,
        },
        768:{
            slidesPerView:1,
            spaceBetween:20,
        },
        500:{
            slidesPerView:1,
            spaceBetween:10,
        },
    },
});


const boxs = document.querySelectorAll('.boxs')


boxs.forEach((box) => {
    const btn = box.querySelector('.box-row')
    const boxshow = box.querySelector('.faq-pg')
    const changeboxText = box.querySelector('.box-text span')
    const downArrow = box.querySelector('.ri-arrow-down-s-line')
    const upArrow = box.querySelector('.ri-arrow-up-s-line')

    upArrow.style.display = 'none';

    let isModified = false;

    btn.addEventListener('click' , function() {
        if(isModified){
            boxshow.classList.remove('show-faq');
            boxshow.classList.remove('show_box');
            btn.style.backgroundColor = '';
            btn.style.boxshadow = '';
            downArrow.style.color = '';
            changeboxText.style.color = '';
            upArrow.style.color = 'none';
            downArrow.style.color = 'block';
            isModified = false;
        } else{
            boxshow.classList.add('show-faq');
            boxshow.classList.add('show_box');
            btn.style.backgroundColor = '#ff4c30';
            btn.style.boxshadow = '0px 4px 10px #ffc3066';
            downArrow.style.color = 'white';
            changeboxText.style.color = 'white';
            upArrow.style.color = 'block';
            downArrow.style.color = 'none';
            isModified = true;
        }

    });
});

const menu = document.querySelector('.menu');

const button = document.querySelector('.ri-menu-2-line');
const removebtn = document.querySelector('.ri-close-large-line');

button.addEventListener('click', function () {
    menu.classList.add('show')
});

removebtn.addEventListener('click', function () {
    menu.classList.remove('show')
});