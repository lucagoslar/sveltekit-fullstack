FROM node:19

WORKDIR /app

COPY /.npmrc /app/
COPY /package*.json /app/
RUN npm ci

COPY /static /app/static
COPY postcss.config.cjs /app/
COPY svelte.config.js /app/
COPY vite.config.js /app/
COPY histoire.config.ts /app/
COPY tsconfig.json /app/

COPY /.env /app/.env

COPY /prisma /app/prisma
RUN npx -y prisma migrate deploy
RUN npx -y prisma generate

COPY /src /app/src
RUN npm run build

CMD [ "node", "/app/build/index.js" ]