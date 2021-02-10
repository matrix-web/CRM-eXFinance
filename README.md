# CRM - eXFinance

## :hammer_and_wrench: Установка
* Скачайте проект себе на локальный компьютер командой ```git clone https://github.com/matrix-web/CRM-eXFinance.git```
* После скачивания перейдите в папку с проектом и в консоли выполните установку зависимостей командой ```npm i```
* После установки зависимостей запустите сборку одной из команд:
    *  ```npm run start``` (режим разработки)
    *  ```npm run build``` (режим сборки)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером. Режим сборки предполагает оптимизацию проекта: сжатие изображений, минифицирование CSS и JS-файлов для загрузки на сервер.

[Демо](https://matrix-web.github.io/CRM-eXFinance/)

## :open_file_folder: Файловая структура

```
gulp-html
├── dist
├── tasks
├── src
│   ├── pug
│   ├── fonts
│   ├── img
│   ├── libs
│   ├── js
│   └── styles
├── gulpfile.esm.js
├── webpack.config.js
├── package.json
├── .browserlistrc
├── .babelrc
└── .gitignore
```

* Корень папки:
    * ```.babelrc``` — настройки Babel
    * ```.gitignore``` – запрет на отслеживание файлов Git'ом
    * ```gulpfile.esm.js``` — настройки Gulp
    * ```webpack.config.js``` — настройки Webpack
    * ```package.json``` — список зависимостей
* Папка ```src``` - используется во время разработки:
    * шрифты: ```src/fonts```
    * изображения: ```src/img```
    * JS-файлы: ```src/js```
    * страницы сайта: ```src/pug/pages/*.pug```
    * SCSS-файлы: ```src/styles```
    * Секции: ```src/pug/sections```
* Папка ```dist``` - папка, из которой запускается локальный сервер для разработки (при запуске ```npm run dev```)
* Папка ```tasks``` - папка с Gulp-тасками

### Страницы проекта
* страницы проекта находятся в папке ```src/pug/pages```
    * главная страница: ```src/pug/pages/index.pug```
    * страница создания новой записи: ```src/pug/pages/record.pug```
    * Страница создания категорий: ```src/pug/pages/categories.pug```
    * Страница планирования: ```src/pug/pages/planning.pug```
    * Страница история: ```src/pug/pages/history.pug```
    * Страница входа: ```src/pug/pages/login.pug```
    * Страница регистрация: ```src/pug/pages/registration.pug```
    * Страница сброса пароля: ```src/pug/pages/reset.pug```
    * Страница 404: ```src/pug/pages/404.pug```

### Что сделано
* Дизайн макета нет, дизайн делал сам
* Выполнена верстка проекта
* Сделана мобильная адаптация от Mobile-first от 320px
* Добавлены скрипты, плагины писал сам:
  * src/js/modules/modal.js - плагин модального окна
  * src/js/modules/select.js - плагин custom-ного элемента select
  * src/js/modules/swipeEvent.js - скрипт добавляющий поддержку событий касания на сенсорных экранах
  * src/js/modules/toast.js - скрипт для вывода сообщений
  * src/js/modules/tooltip.js - скрипт для создания tooltip-ов элементов
  * src/js/modules/uploadImg.js - скрипт для загрузки изображений