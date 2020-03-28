const MENU = document.getElementById("navigation");
const PORTFOLIO_BTNS = document.querySelectorAll('.portfolio-nav-button');
const PORTFOLIO = document.getElementById("portfolio")
const BUTTON = document.getElementById("btn");
const CLOSE_BUTTON = document.getElementById("close-btn");
const ONSUBMIT = document.getElementById('onsubmit')
const LEFT_IPHONE = document.querySelector(".left-iphone");
const LEFT_OFFSCREEN = document.querySelector(".offscreen-left");
const RIGHT_IPHONE = document.querySelector(".right-iphone");
const RIGHT_OFFSCREEN = document.querySelector(".offscreen-right");
const SLIDER_CONTROL_LEFT = document.querySelector('.slider-control-left');
const SLIDER_CONTROL_RIGHT = document.querySelector('.slider-control-right');

//header navigation
document.addEventListener('scroll', onScroll);

function onScroll(event){
    const curPos = window.scrollY;
    const sections = document.querySelectorAll('#wraper > section');
    const links = document.querySelectorAll('#navigation a');
    sections.forEach((el) => {
        if(el.offsetTop-250 <= curPos && (el.offsetTop + el.offsetHeight) > curPos){
            links.forEach((a) => {
                a.classList.remove('active');
                if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
                    a.classList.add('active');
                }
            })
        }
    });
}

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('menu__toggle').checked = false;
    document.querySelector('.logo').classList.remove('innactive');
    
});


//hide logo 375px

let menuBtn = document.querySelector('.menu__btn');

menuBtn.addEventListener('click', function(){
    if (document.querySelector('.logo').classList.contains('innactive')){
        document.querySelector('.logo').classList.remove('innactive');
    } else document.querySelector('.logo').classList.add('innactive');
});


//offscreen
LEFT_IPHONE.addEventListener('click', function() {
    LEFT_IPHONE.classList.add('offscreen');
});

LEFT_OFFSCREEN.addEventListener('click', function() {
    LEFT_IPHONE.classList.remove('offscreen');
});

RIGHT_IPHONE.addEventListener('click', function(){
    RIGHT_IPHONE.classList.add('offscreen');
});

RIGHT_OFFSCREEN.addEventListener('click', function(){
    RIGHT_IPHONE.classList.remove('offscreen');
});

//modal window
BUTTON.addEventListener('click', (e) => {
    if (document.getElementById('name').checkValidity() && document.getElementById('email').checkValidity()) {
        e.preventDefault();
        const subject = document.getElementById('subject').value.toString();
        const project = document.getElementById('project').value.toString();
        document.getElementById('result1').innerText = 'Письмо отправлено';

        if (subject !== '') {
            document.getElementById('result2').innerText = 'Тема: ' + subject;
        }
        else { document.getElementById('result2').innerText = 'Без темы'; }

        if (project !== '') {
            document.getElementById('result3').innerText = 'Описание: ' + project;
        }
        else { document.getElementById('result3').innerText = 'Без описания'; }

        document.getElementById('message-block').classList.remove('hidden');
        document.getElementById('message').classList.remove('hidden');
    }
});

CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('result1').innerText = '';
    document.getElementById('result2').innerText = '';
    document.getElementById('result3').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
    document.getElementById('message').classList.add('hidden');
    ONSUBMIT.reset();
});

//portfolio active navigation
for (let i = 0; i < PORTFOLIO_BTNS.length; i++) {
    PORTFOLIO_BTNS[i].addEventListener('click', function (event) {
        PORTFOLIO_BTNS.forEach(function (item) {
            event.preventDefault();
            if (event.target !== item) {
                item.classList.remove('active');
            }
            event.target.classList.add('active');
        });
    });
}
//portfolio activ imgs
PORTFOLIO.addEventListener('click', (event) => {
    PORTFOLIO.querySelectorAll('.layout-4-column div').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

//portfolio shuffle imgs
let listImages = document.querySelector('.layout-4-column'),
    imagesLi = document.querySelectorAll('.portfolio-content'),
    portfolioBtnAll = document.getElementById('all'),
    portfolioBtnDesign = document.getElementById('design'),
    portfolioBtnGraphic = document.getElementById('graphic'),
    portfolioBtnArtwork = document.getElementById('artwork');

function shufflePictures(event) {
    if (event.target.classList.contains('active')) {

        for (let i = imagesLi.length; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i === 12 ? i : i + 1));
            listImages.insertBefore(imagesLi[randomIndex], imagesLi[i]);
        }
    }
}

portfolioBtnAll.addEventListener('click', shufflePictures);
portfolioBtnDesign.addEventListener('click', shufflePictures);
portfolioBtnGraphic.addEventListener('click', shufflePictures);
portfolioBtnArtwork.addEventListener('click', shufflePictures);


//slider
SLIDER_CONTROL_LEFT.addEventListener('click', onScrollLeft);
SLIDER_CONTROL_RIGHT.addEventListener('click', onScrollRight);

function onScrollLeft(event){
    var noActiveElement = document.querySelector('.container-slider .displayNone');
    var ActiveElement = document.querySelector('.container-slider .activeElement');
    noActiveElement.classList.remove('displayNone');

    noActiveElement.classList.add('move-from-left');

    setTimeout(function(){
    noActiveElement.classList.remove('move-from-left');
    ActiveElement.classList.add('displayNone');
    noActiveElement.classList.add('activeElement');
    ActiveElement.classList.remove('activeElement')
    },500)
}

function onScrollRight(event){
    var noActiveElement = document.querySelector('.container-slider .displayNone');
    var ActiveElement = document.querySelector('.container-slider .activeElement');
    noActiveElement.classList.remove('displayNone');
    noActiveElement.classList.add('move-from-right');
    setTimeout(function(){
    noActiveElement.classList.remove('move-from-right');
    ActiveElement.classList.add('displayNone');
    noActiveElement.classList.add('activeElement');
    ActiveElement.classList.remove('activeElement')
    },500)
}
