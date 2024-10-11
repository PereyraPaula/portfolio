import { defineConfig } from "vite";

export default defineConfig({
    root: './src',
    base: '/',
    publicDir: '../public',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        minify: "esbuild",
        rollupOptions: {
            input: {
                main: 'src/index.html',
                "more-work": 'src/more-work/more-work.html',
            },
        },
    },
    plugins: [],
});
