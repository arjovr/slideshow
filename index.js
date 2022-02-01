const imgs = document.querySelectorAll('.container > .img');
const dots = document.querySelectorAll('.dots > .dot');

let currentSlideIdx = 0;

function next() {
    const current = document.querySelector('.container > .img.current');
    let next = current.nextElementSibling;
    currentSlideIdx++;
    if (next.tagName == 'A') {
        next = null;
    }
    if (!next) {
        next = imgs[0];
        currentSlideIdx = 0;
    }
    if (next) {
        current.classList.remove('current');
        next.classList.add('current');
    }
    dots.forEach((x) => {
        x.classList.remove('active');
    });
    dots[currentSlideIdx].classList.add('active');
}

function prev() {
    const current = document.querySelector('.container > .img.current');
    let prev = current.previousElementSibling;
    currentSlideIdx--;
    if (!prev) {
        prev = imgs[imgs.length - 1];
        currentSlideIdx = imgs.length - 1;
    }
    if (prev) {
        current.classList.remove('current');
        prev.classList.add('current');
    }
    dots.forEach((x) => {
        x.classList.remove('active');
    });
    dots[currentSlideIdx].classList.add('active');
}

function currentSlide(n) {
    imgs.forEach((x) => {
        x.classList.remove('current');
    });
    const nth = imgs[n];
    nth.classList.add('current');
    dots.forEach((x) => {
        x.classList.remove('active');
    });
    currentSlideIdx = n;
    dots[n].classList.add('active');
}

setInterval(next, 5000);
