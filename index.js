const imgs = document.querySelectorAll('.container > .img');

function next() {
    const current = document.querySelector('.container > .img.current');
    let next = current.nextElementSibling;
    if (next.tagName == 'A') {
        next = null;
    }
    if (!next) {
        next = imgs[0];
    }
    if (next) {
        current.classList.remove('current');
        next.classList.add('current');
    }
}

function prev() {
    const current = document.querySelector('.container > .img.current');
    let prev = current.previousElementSibling;
    if (!prev) {
        prev = imgs[imgs.length - 1];
    }
    if (prev) {
        current.classList.remove('current');
        prev.classList.add('current');
    }
}