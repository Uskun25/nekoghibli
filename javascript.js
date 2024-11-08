let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlider(); 
}
let refreshSlider = setInterval(()=> {next.click()}, 3000)
function reloadSlider(){ 
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}
dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

// Scroll Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2000,
    reset: true
})

sr.reveal ('.home-text',{})
sr.reveal ('.home-img',{})

sr.reveal ('.about-img',{})
// sr.reveal ('.heading',{})
sr.reveal ('.about-text',{delay:200})

sr.reveal ('.sales',{})

// sr.reveal ('.work-text',{})
// sr.reveal ('.work-img',{delay:200})

// sr.reveal ('.app h1',{})
// sr.reveal ('.app',{delay:200})

// sr.reveal ('form input',{})
// sr.reveal ('form textarea',{})