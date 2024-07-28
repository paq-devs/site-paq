import ContactRequest, { ContactResponse } from "./ContactModel";
import Language from "@/app/i18n/Language";

export default interface ContactAdapter {
    send(data: ContactRequest): Promise<ContactResponse>;
}

export class ContactMailChimpClient implements ContactAdapter {
    async send(data: ContactRequest): Promise<ContactResponse> {
        let body = {
            "key": process.env.MAILCHIMP_API_KEY, 
            "message": {
                "from_email": process.env.MAILCHIMP_FROM_EMAIL, 
                "subject": Language.getOrDefault('contact.mailchimp.subject'), 
                "text": `${data.name} - ${data.phone} - ${data.message}`, 
                "to": [{ "email": process.env.MAILCHIMP_TO_EMAIL, "type": "to" }]
            }
        }

        const response = await fetch(`${process.env.MAILCHIMP_SEND_URL}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        });

        var _ = await response.json();
        
        if (!response.ok) {
            return ContactResponse.error(Language.getOrDefault('contact.error'));
        } 
        
        return ContactResponse.success(Language.getOrDefault('contact.success'));
    }
}