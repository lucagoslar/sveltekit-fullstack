FROM node:20

WORKDIR /app

COPY /.npmrc /app/
COPY /package*.json /app/
RUN npm ci

COPY /static /app/static
COPY postcss.config.cjs /app/
COPY svelte.config.js /app/
COPY vite.config.js /app/
COPY /.storybook /app/.storybook
COPY tsconfig.json /app/

COPY /.env.production /app/.env

COPY /prisma /app/prisma
RUN npx -y prisma generate

COPY /src /app/src
RUN npm run build

CMD [ "node", "/app/build/index.js" ]