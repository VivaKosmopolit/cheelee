const translations = {
    "en": {
        "language": "EN",
        "web_menu_about-us": "About us",
        "web_menu_roadmap": "Roadmap",
        "web_menu_documents": "Documents",
        "web_menu_faq": "F.A.Q.",
        "web_menu_buy-nft": "Buy NFT glasses",
    },
    "ru": {
        "language": "RU",
        "web_menu_about-us": "О нас",
        "web_menu_roadmap": "Роудмап",
        "web_menu_documents": "Документы",
        "web_menu_faq": "F.A.Q.",
        "web_menu_buy-nft": "Купить NFT",
    }
};


const textElement = document.getElementById('language-text');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownItems = dropdownMenu.querySelectorAll('.dropdown__value');
const htmlElement = document.documentElement;

function updateTextContent(lang) {
    textElement.textContent = translations[lang].language;
    htmlElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

textElement.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        const selectedLang = item.getAttribute('data-lang');
        updateTextContent(selectedLang);
        dropdownMenu.classList.remove('show');
    });
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
        dropdownMenu.classList.remove('show');
    }
});