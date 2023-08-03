# Storyblok / Next.js / Tailwind UI POC

## Initial setup

1. Set up Storyblok account
2. `git clone https://github.com/storyblok/next.js-ultimate-tutorial.git` and install dependencies
3. Follow local ssl proxy instructions at <https://www.storyblok.com/faq/setup-dev-server-https-proxy>

## Running this project

1. Get token from Storyblok account space and add to .env (see env.example)
2. `local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem`
3. npm run dev
4. View at <http://localhost:3000>, <https://localhost:3010>, or through the Storyblok space UI