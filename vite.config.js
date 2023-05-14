import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        outDir: "dist",
        assetsDir: "",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                game: resolve(__dirname, "game.html"),
                instructions: resolve(__dirname, "instructions.html"),
                ranking: resolve(__dirname, "ranking.html"),
                // Agrega aquí todas las rutas que deseas incluir en la carpeta dist
            },
        },
    },
});
