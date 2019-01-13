// import i18next from 'i18next';

i18next.init({
    lng: 'en',
    debug: false,
    resources: {
        en: {
            translation: {
                "key": "hello my name is Oscar Plaza,<br/> I'am a backend developer and android developer,enthusiastic GIS,frontend,IoT developer <br/> I'am from chile,south america <br/> I was volunter in 'Techo-Chile' and member of JS,GO,PHP local dev community "
            }
        },
        es: {
            translation: {
                "key": "Hola mi nombre es Oscar Plaza,<br/> backend y android desarrollador, con conocimiento en iot Gis y la capa frontend <br/> fui voluntario de techo chile, participo en comunidades de desarrolladores aca en chile"
            }
        }
    }
}, function(err, t) {
    // init set content
    updateContent();
});

function updateContent() {
    document.getElementById('output').innerHTML = i18next.t('key');
}

function changeLng(lng) {
    i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
    updateContent();
});