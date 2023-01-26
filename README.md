# Heldenwerft
Social Learning Platform


## Tech stack
* Strapi Headless CMS
* Svelte + Sveltekit
* DaisyUI + Tailwind

## Install
```
npm inst
```

Copy ./app/.env.example to .env and change if needed

Change settings in ./cms/config/database.js

Optional:
Install MySQL or MariaDB
Alternatively Strapi can use a SQLite (not suitable for production)

### Run locally
```
npm run dev
```

### Build for production
```
cd ./app
npm run build

cd ../cms
npm run strapi build
```

### Run in production
I recommend using pm2

```
pm2 start ./app/build/index.js
pm2 start ./cms/server.js
```

You can
```
pm2 save
```

to
```
pm2 resurect
```

if needed.