// brands
let brands =
    [
        { quote: '"Mais do que nunca, os animais de estimação são tratados como membros da família."', origin: 'cbs.svg' },
        { quote: '"DogDev é um ótimo serviço para seus Pets."', origin: 'forbes.svg' },
        { quote: '"DogDev usa ingredientes simples e limpos em seus pratos."', origin: 'fox.svg' },
        { quote: '"DogDev é um ótimo serviço para seus Pets."', origin: 'sharktank.svg' }
    ];
let brandQuote = document.querySelector('.brands .quote');
let brandIcons = document.querySelector('.brands .icons');

for (let tindex in brands) {
    let img = document.createElement('img');
    img.setAttribute('src', './assets/images/' + brands[parseInt(tindex)].origin);
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
}