# Nuxt.js on Firebase Playground

[![Greenkeeper badge](https://badges.greenkeeper.io/kazu69/nuxt-firebase-playground.svg)](https://greenkeeper.io/)

It is a playground for enjoying and enjoying the function of Nuxt.js :lollipop:

---

- [Firebase](https://firebase.google.com/)
- node v6.11.5 (Cloud Functions current Node.js version running isv6.11.5)
- nuxt v1.0.0-rc11
- vue 2.4.4

### Setup

```sh
npm install -g firebase-tools
npm run setup
```

### local preview

```sh
npm run dev
```

open [localhost:3000](http://localhost:3000)

When using firebase locally

```sh
npm run serve
```

open [localhost:5000](http://localhost:5000)

### deploy

```sh
npm run build:nuxt
npm run deploy
```

[LiveDemo](https://nuxt-firebase-playground.firebaseapp.com)

This APP is enable below.

- [x] Server Side Render with Express (SSR)
- [x] Offline Cache

