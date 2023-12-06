# Nuxt Midtrans

[Nuxt 3](https://nuxt.com) module to integrate [Midtrans Payment Gateway](https://midtrans.com/).

## Features

- 🤝 Easy to use

## Setup

```bash
# pnpm
pnpm add nuxt-midtrans

# npm
npm i nuxt-midtrans

# yarn
yarn add nuxt-midtrans
```

## Basic Usage

Add `nuxt-midtrans` to the `modules` section of your Nuxt configuration and provide your Midtrans Client Key.

```ts
// `nuxt.config.ts`
export default defineNuxtConfig({
  modules: ['nuxt-midtrans'],

  midtrans: {
    mode: 'sandbox'
    clientKey: 'XXXXXXXXXXXX'
  }
})
```

```vue
// `Component.vue`
<template>
  <div>
    <button @click="showSnap">Show Snap</button>
  </div>
</template>

<script setup>
const showSnap = () => {
  const paymentToken = "123123123" // get this token from backend
  window.snap.pay(paymentToken)
}
</script>
```

Done!