const MENU = document.getElementById("navigation");
const MENU_PORTFOLIO = document.getElementById("portfolio-navigation");
const PORTFOLIO = document.getElementById("portfolio")
const PORTFOLIO_IMG = document.getElementById('portfolio-flex');
const BUTTON = document.getElementById("btn");
const CLOSE_BUTTON = document.getElementById("close-btn");
const ONSUBMIT = document.getElementById('onsubmit')
const LEFT_IPHONE = document.querySelector(".left-iphone");
const LEFT_OFFSCREEN = document.querySelector(".offscreen-left");
const RIGHT_IPHONE = document.querySelector(".right-iphone");
const RIGHT_OFFSCREEN = document.querySelector(".offscreen-right");

//navigation
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

//post form
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

//portfolio navigation
MENU_PORTFOLIO.addEventListener('click', (event) => {
    MENU_PORTFOLIO.querySelectorAll('button').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    const Img = PORTFOLIO_IMG.querySelectorAll('img');
    const img0 = Img[0].src;
        for(var i = 0; i  < Img.length; i++){
            if(i == Img.length-1 ){
                Img[i].src = img0;
            }
            Img[i].src = Img[i+1].src;
        }
});

PORTFOLIO.addEventListener('click', (event) => {
    PORTFOLIO.querySelectorAll('img').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});