# Getting Started

O site do PAQ foi construído utilizando o framework NextJS na versão `14.2.3` e com React `18`.

Para conseguir rodar, você vai precisar ter as seguintes dependencias instaladas no seu computador:

### Runtime

A primeira coisa que você vai precisar instalar para rodar o projeto é um runtime para Javascript, como o Node, Deno ou Bun.

Nós recomendadmos que você utilize o Node, e a melhor forma de instalalo é usando o NVM:

#### Windows

Para instalar o NVM e o Node no windows, basta seguir as instruções de instação do NVM no [repositório oficial no Github](https://github.com/coreybutler/nvm-windows#installation--upgrades)

Depois que o NVM estiver instalado você pode rodar os seguintes comandos no Powershell:

```powershell
nvm install <node_version>
```

#### Linux/Mac

Para instalar o NVM e o Node no Linux/Mac primeiro vamos instalar o NVM com o seguinte comando:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Depois, vamos recarregar as configurações do shell

```bash
source ~/.bashrc ## ou ~/.zshrc se estiver usando ZSH
```

e por último instalar o Node com o seguinte comando:

```bash
nvm install <node_version>
```

---

## Instalando as dependências

Para instalar as dependências basta rodar o comando:

```bash
npm install
```

---

## Rodando o projeto:

Para rodar o projeto em modo de desenvolvimento, basta rodar o comando:

```bash
npm run dev
```

Apos isso, você podera abrir no seu navegador o endereço [http://localhost:3000](http://localhost:3000) para ver o resultado.


## Site em Staging (Vercel)

https://site-paq-staging.vercel.app/

## Variáveis de ambiente

To send e-mail we are using the [MailChimp](https://mailchimp.com/developer/transactional/guides/send-first-email/) and need some ENV vars to do that.

Para enviar emails nos estamos utilizando o [MailChimp](https://mailchimp.com/developer/transactional/guides/send-first-email/) e precisamos configurar algumas variavéis de ambiênte para ele funcionar.

- MAILCHIMP_SEND_URL: Endpoint to send e-mail [https://mandrillapp.com/api/1.0/messages/send](https://mandrillapp.com/api/1.0/messages/send)
- MAILCHIMP_API_KEY: API key to MailChimp
- MAILCHIMP_FROM_EMAIL: Sender e-mail
- MAILCHIMP_TO_EMAIL: Recipient e-mail

We keeps the environment variables locally to a mock endpoint **/mail-mock**

Por favor, nao commite a API Key por rasões de segurança.

