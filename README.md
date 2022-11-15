# Heldenwerft
Social Learning Platform

## Install
```
git clone https://github.com/phusa/heldenwerft
cd app
npm install
cd ../cms
npm install
```

Optional:

Install MariaDB 10.6 (Strapi can use SQLite)

change settings in ./cms/config/database.js

### Run
```
in ./cms
npm run strapi dev

in ./app
npm run app
```


## Tech stack
* Strapi Headless CMS
* Svelte + Sveltekit
* DaisyUI + Tailwind

## Components
### Content
* Hero
* Gallery
* Carousel
* Call out
* Card
* Accourdion
* Tabs
* Steps
* Infographic
* Social Media

### Layout
* Layout Full Width
* Layout Container
* Layout Grid

### Sepcial
* Navigation
* Avatar
* Profile menu
* Search