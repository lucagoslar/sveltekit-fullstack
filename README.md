# sveltekit-fullstack

Everything you need to build a Svelte project with [Histoire](https://histoire.dev/), [typesafe-i18n](https://github.com/ivanhofer/typesafe-i18n), [Prisma](https://prisma.io/) and [trpc](https://trpc.io/).

## Developing

Make sure to create a copy of `.env.example` with the name `.env` and adapt it to your requirements before running the application.

```bash
# install dependencies
npm i

# apply db migrations to db
npx prisma migrate dev

# run the development server
npm run dev
```

## Building

You may build for any target wanted. However, this project is preconfigured to operate on Docker. Be sure to adapt your environment variables before running the application.

```bash
# build and run the image
docker-compose up --build
```
