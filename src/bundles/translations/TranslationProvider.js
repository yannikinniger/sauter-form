export default class TranslationProvider {

    static currentLanguage = 'de';
    static translationObject = require(`../../translation/${TranslationProvider.currentLanguage}.json`);

    static changeLanguage(newLanguage) {
        if (newLanguage !== TranslationProvider.currentLanguage) {
            try {
                TranslationProvider.translationObject = require(`../../translation/${newLanguage}.json`);
                TranslationProvider.currentLanguage = newLanguage;
            } catch (e) {
                // keep the current language if no file was found
            }
        }
    }

}