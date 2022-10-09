import { defineConfig } from 'vite'

export default defineConfig ({
    mode: 'development',
    resolve: {
        alias: {

        }
    },
    server: {
        // open: true,
        host: '127.0.0.1',
        proxy: {}
    }
})