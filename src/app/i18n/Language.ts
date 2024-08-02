
export enum LanguageEnum {
    pt = 'pt_br',
}

export default class Language {
    static data: any;
    static current: LanguageEnum;

    static load(): void {
        Language.data = require(`./${Language.current}.json`);
    }

    static getOrDefault(key: string): string {
        if (!Language.data) {
            Language.setLanguage(LanguageEnum.pt);
        }

        return Language.data[key] || key;
    }

    static setLanguage(language: LanguageEnum): void {
        Language.current = language;
        Language.load();
    }
}