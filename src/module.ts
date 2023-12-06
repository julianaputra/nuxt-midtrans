import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { defu } from 'defu'
import { name, version } from '../package.json'

// Module options TypeScript interface definition
export interface ModuleOptions {
  mode: "production" | "sandbox"
  clientKey: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'midtrans',
    compatibility: {
      nuxt: '^3',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    mode: "sandbox",
    clientKey: ''
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.midtrans = defu(nuxt.options.runtimeConfig.public.midtrans, {
      mode: options.mode,
      clientKey: options.clientKey
    })

    nuxt.options.build.transpile.push(resolve('runtime'))

    addPlugin({
      src: resolve('runtime/plugin.client'),
      mode: 'client',
    })
  }
})
