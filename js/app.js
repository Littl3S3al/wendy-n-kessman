// modal
const title = document.querySelector('#PDFtitle');
const link = document.querySelector('.featuredPdf');

const fill = (theTitle, theLink) => {
    title.innerHTML = theTitle;
    link.src = theLink;
}

// nav bar
const openBtn = document.querySelector('#openBtn');
const nav = document.querySelector('#nav');
const closeBtn = document.querySelector('#closeBtn');
const screen = document.querySelector('.hide');
let open = false;

const openNav = () => {
    nav.classList.remove('d-none');
}

const closeNav = () => {
    nav.classList.add('d-none');
}

openBtn.addEventListener('click', () => {
    openNav();
});

closeBtn.addEventListener('click', () => {
    closeNav();
})

screen.addEventListener('click', () => {
    closeNav();
})

nav.addEventListener('click', (e) => {
    if(e.target.tagName === 'A'){
        closeNav();
    }
})