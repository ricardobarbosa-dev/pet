// brands
let brands =
    [
        { quote: '', origin: 'Formula-Natural.webp' },
        { quote: '', origin: 'Golden.webp' },
        { quote: '', origin: 'Magnus.webp' },
        { quote: '', origin: 'Nutrive.webp' },
        { quote: '', origin: 'Origens.webp' },
        { quote: '', origin: 'Premier.webp' },
        { quote: '', origin: 'Special-Dog.webp' },
        { quote: '', origin: 'Unna.webp' }
    ];
let brandQuote = document.querySelector('.brands .quote');
let brandIcons = document.querySelector('.brands .icons');

for (let tindex in brands) {
    let img = document.createElement('img');
    img.setAttribute('src', './assets/images/marcas/' + brands[parseInt(tindex)].origin);
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => fillbrand(parseInt(tindex)));
    brandIcons.appendChild(img);
}

let currentbrand = 0;
let brandTimer;

const fillbrand = (index) => {
    clearTimeout(brandTimer);
    currentbrand = index;
    brandQuote.innerHTML = brands[currentbrand].quote;
    let imgs = brandIcons.querySelectorAll('img');
    for (let img of imgs) img.style.opacity = 0.2;
    imgs[currentbrand].style.opacity = 1;
    brandTimer = setTimeout(nextbrand, 3000);
}

const nextbrand = () => {
    if (brands[currentbrand + 1]) {
        fillbrand(currentbrand + 1);
    } else {
        fillbrand(0);
    }
}
nextbrand();

// FAQ
let currentFaq = 0;
let faqItems = document.querySelectorAll('.faq .accordion .faq_item');
faqItems.forEach((el, index) => {
    el.querySelector('.faq_title').addEventListener('click', () => setFaq(index));
});

const setFaq = (index) => {
    currentFaq = index;
    if (faqItems[currentFaq].classList.contains('opened')) {
        faqItems[currentFaq].classList.remove('opened');
        return;
    }
    for (let item of faqItems) {
        item.classList.remove('opened');
    }
    faqItems[currentFaq].classList.add('opened');
};

// Scroll Reveal
ScrollReveal().reveal('.hero', {
    origin: 'top',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.advantages', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});
ScrollReveal().reveal('.categories', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.best-sellers', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.products', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.dog-cat', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('.brands', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});
ScrollReveal().reveal('.faq', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});
ScrollReveal().reveal('.footer', {
    origin: 'bottom',
    duration: 2000,
    distance: '20%'
});