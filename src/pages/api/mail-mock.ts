import type { NextApiRequest, NextApiResponse } from "next";
import ContactRequest, { ContactResponse } from "@/app/components/Contact/adapter/ContactModel";
import Language from "@/app/i18n/Language";

type ChimpMailRequest = { 
    key: string;
    message: {
        from_email: string;
        subject: string;
        text: string;
        to: [{ email: string, type: string }];
    };
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ContactResponse>
) {
    // THIS CLASS FOR A MOCK USE THE CHIMP MAIL CLIENT
    if (!(req.method === 'POST')) {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} not allowed`);
    }

    const chimpMailRequest = req.body as ChimpMailRequest;

    //Validate chimpMail request
    if (!chimpMailRequest ||
        !chimpMailRequest.key || 
        !chimpMailRequest.message || 
        !chimpMailRequest.message.from_email || 
        !chimpMailRequest.message.subject || 
        !chimpMailRequest.message.text || 
        !chimpMailRequest.message.to) {
        return res
            .status(400)
            .json(ContactResponse.error(Language.getOrDefault('contact.error')));
    }

    await new Promise(resolve => setTimeout(resolve, 1000)); // Mock a fake loading time
    return res.status(200).json(ContactResponse.success(Language.getOrDefault('contact.success')));
}
