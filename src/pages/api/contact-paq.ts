import type { NextApiRequest, NextApiResponse } from "next";
import ContactRequest, { ContactResponse } from "@/app/components/Contact/adapter/ContactModel";
import { ContactMailChimpClient } from "@/app/components/Contact/adapter/ContactAdapter";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>
) {
    if (!(req.method === 'POST')) {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} not allowed`);
    }

    const { name, phone, message } = req.body;

    const contactRequest = new ContactRequest(name, phone, message);
    const errorMessage = contactRequest.validate();

    if (errorMessage) {
        return res
            .status(400)
            .json(ContactResponse.error(errorMessage));
    }

    let contactResponse = await new ContactMailChimpClient().send(contactRequest);
    let status = contactResponse.error ? 500 : 200;
    
    return res.status(status).json(contactResponse);
        
}

