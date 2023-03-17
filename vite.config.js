import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base: '/weather-app-without-needing-a-server/',
    plugins: [vue()]
})