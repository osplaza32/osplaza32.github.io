// import i18next from 'i18next';

i18next.init({
    lng: 'en',
    debug: true,
    resources: {
        en: {
            translation: {
                "key": "hello world"
            }
        },
        es: {
            translation: {
                "key": "Hola mundo"
            }
        }
    }
}, function(err, t) {
    // init set content
    updateContent();
});

function updateContent() {
    console.log(document.getElementById('output'));
    document.getElementById('output').innerHTML = i18next.t('key');
}

function changeLng(lng) {
    i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
    updateContent();
});