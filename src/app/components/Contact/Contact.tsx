"use client"

import Language from "@/app/i18n/Language";
import { FormEvent, useRef, useState } from "react";
import './Contact.css';
import { SubmitButton } from "../button";
import Input, { TextArea } from "../input/input";
import { toast } from 'react-toastify';
import LoadingOverlay from "../loading/loading";

const Contact = () => {
    let [isLoading, setIsLoading] = useState(false);
    let formRef = useRef<HTMLFormElement>(null);
    let [name, setName] = useState('');
    let [phone, setPhone] = useState('');
    let [message, setMessage] = useState('');

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        setIsLoading(true);
        try {
            event.preventDefault();

            const request = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: name,
                    phone: phone,
                    message: message
                })
            };

            const response = await fetch('/api/contact-paq', request);

            const result = await response.json();
            if (!response.ok) {
                toast.error(result.message);
                return;
            }

            toast.success(result.message);
            if (formRef.current) formRef.current.reset();

            setName('');
            setPhone('');
            setMessage('');
        } catch (error) {
            toast.error(Language.getOrDefault('contact.error'));
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div id="contact-container">
            <LoadingOverlay isLoading={isLoading}></LoadingOverlay>
            <div className="contact-form gradient-box">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-2 text-center text-2xl contact-title">{Language.getOrDefault('contact.title')}</h2>
                    <p className="mt-4 sm:w-full text-center text-sm text-gray-600 contact-subtitle">{Language.getOrDefault('contact.subtitle')}</p>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form ref={formRef} className="space-y-6" onSubmit={onSubmit}>
                        <div>
                            <div className="mt-2">
                                <Input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required={true}
                                    placeholder={Language.getOrDefault('contact.name.placeholder')}
                                ></Input>
                            </div>
                        </div>

                        <div>
                            <div className="mt-2">
                                <Input
                                    mask="(99) 99999-9999"
                                    type="text"
                                    name="phone"
                                    value={phone}
                                    required={true}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder={Language.getOrDefault('contact.phone.placeholder')}
                                ></Input>
                            </div>
                        </div>


                        <div>
                            <div className="mt-2">
                                <TextArea
                                    name="message"
                                    required={true}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder={Language.getOrDefault('contact.message.placeholder')}>
                                </TextArea>
                            </div>
                        </div>

                        <div>
                            <SubmitButton isEnabled={!isLoading} title={Language.getOrDefault('contact.button.send')} width="100%" height="45px"></SubmitButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;