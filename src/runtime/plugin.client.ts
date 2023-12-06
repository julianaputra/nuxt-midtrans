import { defineNuxtPlugin, useHead, useRuntimeConfig } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  const { mode, clientKey } = useRuntimeConfig().public.midtrans

  const midtransScriptUrl =
    mode === 'production'
      ? 'https://app.midtrans.com/snap/snap.js'
      : 'https://app.sandbox.midtrans.com/snap/snap.js'

console.log('hehe');

  useHead({
    script: [
      {
        "data-client-key": clientKey,
        src: midtransScriptUrl
      },
    ],
  })
})
