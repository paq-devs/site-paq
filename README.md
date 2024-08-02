This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Site em Staging (Vercel)

https://site-paq-staging.vercel.app/

## Env vars

To send e-mail we are using the [MailChimp](https://mailchimp.com/developer/transactional/guides/send-first-email/) and need some ENV vars to do that.

- MAILCHIMP_SEND_URL: Endpoint to send e-mail [https://mandrillapp.com/api/1.0/messages/send](https://mandrillapp.com/api/1.0/messages/send)
- MAILCHIMP_API_KEY: API key to MailChimp
- MAILCHIMP_FROM_EMAIL: Sender e-mail
- MAILCHIMP_TO_EMAIL: Recipient e-mail

We keeps the environment variables locally to a mock endpoint **/mail-mock**
Not commit API Key for security reasons

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
