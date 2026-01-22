// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'shell',
      remotes: {
        logyMf: 'https://logym-three.vercel.app/assets/remoteEntry.js',
      },
      shared: {
        vue: {
          // Forzamos a que la versión compartida sea la que tiene el compilador
          packagePath: 'vue/dist/vue.esm-bundler.js' 
        }
      }
    })
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  },
  build: {
    target: 'esnext'
  }
})