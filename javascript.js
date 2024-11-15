// #region variables
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

let refreshSlider = setInterval(() => { next.click() }, 3000)
// #endregion

// #region codes
// #region image-slider
next.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider();
}
function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}
dots.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlider();
    })
})
// #endregion

// #region scroll-animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2000,
    reset: true
})

sr.reveal('.slider', {})

sr.reveal('.home', {})
sr.reveal('.home-text', { delay: 500 })

sr.reveal('.about-img', {})
sr.reveal('.heading', {})
sr.reveal('.about-text', { delay: 500 })

sr.reveal('.featured', {})

sr.reveal('.movies-container', {})

sr.reveal('.newsletter h2', {})
sr.reveal('.newsletter ', { delay: 200 })

sr.reveal('copyright', {})
// #endregion
// #endregion