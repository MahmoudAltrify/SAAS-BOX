
function sliderMaker(class_name){
    let slides = document.querySelectorAll(class_name);

    let counter = 0;
    setInterval(function (){
        if(counter === slides.length) counter = 0;

        for(let i = 0; i < slides.length; i++ ){
            slides[i].classList.remove('active-img');
        }
        slides[counter].classList.add('active-img');
        counter++;
        //console.log(counter);
    },3000)
}
sliderMaker('.img-slide')
sliderMaker('.hero-text')
let card = document.querySelectorAll(".section-3-card");

for(let i = 0; i < card.length; i++){
    card[i].onmouseover=function (){
        for(let j = 0; j < card.length; j++ ){
            card[j].classList.remove('active-card');
        }
        card[i].classList.add('active-card');
    }
}//card-mouse-over

let btns = document.querySelectorAll('.select-button');
let boxes = document.querySelectorAll('.show-of-3');
btns.forEach(function (btn,key){
    btn.onclick = function (){
        boxes.forEach(function (box,key){
            box.classList.remove('active-box');
        })
        boxes[key].classList.add('active-box');
    }
})

const slider = document.querySelector('.hero-img');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX);
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});
