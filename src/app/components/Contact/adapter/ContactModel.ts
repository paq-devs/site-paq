import Language from "@/app/i18n/Language";

export default class ContactRequest {
    name: string;
    phone: string;
    message: string;

    constructor(name: string, phone: string, message: string) {
        this.name = name.trim();
        this.phone = phone.trim();
        this.message = message.trim();
    }

    validate(): string | null {
        if (!this.name) {
            return Language.getOrDefault('contact.name.required');
        }
        if (!this.phone) {
            return Language.getOrDefault('contact.phone.required');
        }
        if (!this.message) {
            return Language.getOrDefault('contact.message.required');
        }

        return null;
    }
}

export class ContactResponse {
    message: string;
    error: boolean;

    private constructor(message: string, error: boolean) {
        this.message = message;
        this.error = error;
    }

    static success(message: string): ContactResponse {
        return new ContactResponse(message, false);
    }

    static error(message: string): ContactResponse {
        return new ContactResponse(message, true);
    }
}