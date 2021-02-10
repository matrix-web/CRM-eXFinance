import { series, parallel } from 'gulp'
import cleanDist from './tasks/clean'
import processHTML from "./tasks/processingHTML"
import styles from "./tasks/styles"
import scripts from "./tasks/scripts"
import sprites from "./tasks/svgsprite"
import fonts from "./tasks/fonts"
import server from "./tasks/server"
import images from "./tasks/image"
import favicons from "./tasks/favicons"

const paths = {
    pug: {
        src: ["./src/pug/pages/**/*.pug",],
        watch: ["./src/pug/**/*.pug"],
        dist: './dist'
    },
    styles: {
        src: ["./src/styles/main.{scss,sass}"],
        watch: "./src/styles/**/*.{scss,sass}",
        dist: "./dist/css"
    },
    scripts: {
        src: "./src/js/**/index.js",
        watch: "./src/js/**/*.js",
        dist: "./dist/js"
    },
    fonts: {
        src: "./src/fonts/**/*.{woff,woff2}",
        dist: "./dist/fonts/",
        watch: "./src/fonts/**/*.{woff,woff2}"
    },
    image: {
        src: [
            "./src/img/**/*.{jpeg,jpg,png,gif,tiff,svg}",
            "!./src/img/favicons/**/*.{jpe?g,png,gif,tiff,svg}"
        ],
        watch: "./src/img/**/*.{jpeg,jpg,png,gif,tiff,svg}",
        dist: "./dist/img"
    },
    sprites: {
        src: "./src/img/svg/*.svg",
        watch: "./src/img/svg/*.svg",
        dist: "./dist/img/sprites/"
    },
    favicons: {
        src: "./src/img/favicon/*.{jpg,jpe?g,png,gif}",
        dist: "./dist/img/favicons/",
    }
}

export { paths }

export const development = series(cleanDist,
    parallel([processHTML, styles, scripts, images, sprites, fonts, favicons]),
    parallel(server)
)

export const production = series(cleanDist,
    parallel([processHTML, styles, scripts, images, sprites, fonts, favicons])
)

export default development