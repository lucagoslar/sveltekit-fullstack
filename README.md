# sveltekit-fullstack

Everything you need to build a Svelte project with [Storybook](https://storybook.js.org/), [typesafe-i18n](https://github.com/ivanhofer/typesafe-i18n), [Prisma](https://prisma.io/) and [trpc](https://trpc.io/).

## Developing

Make sure to create a copy of `.env.example` with the name `.env` and adapt it to your requirements before running the application.

```bash
# install dependencies
npm i

# apply db migrations to db
npx prisma migrate dev

# seed the database (flags '--no-flush' and '--no-seed' available)
npm run seed --

# run storybook
npm run storybook

# or run the development server
npm run dev
```

## Building

You may build for any target wanted. However, this project is preconfigured to operate on Docker. Similar to before, create a copy of `.env.example`. However, name it `.env.production` this time. Take into consideration that your application will use port `3000` in production. Before starting the service, apply any pending migrations with `prisma migrate deploy` to your database.

```bash
# build and run the image
docker-compose up --build
```
