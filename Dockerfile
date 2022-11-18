FROM node:18

WORKDIR /app

COPY /.npmrc /app/
COPY /package*.json /app/
RUN npm ci

COPY /.env /app/.env

COPY /src /app/src
COPY /static /app/static
COPY postcss.config.cjs /app/
COPY sass-alias.js /app/
COPY svelte.config.js /app/
COPY vite.config.ts /app/

RUN npm run build

CMD [ "node", "/app/build/index.js" ]