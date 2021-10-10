# goit-react-hw-03-image-finder
:один: Установка create-react-app
npx create-react-app my-app
npm start
:два: Настройка pre-commit хуков (Репозиторий )(Видео инструкция )
npm install —save-dev prettier eslint OR npx mrm@2 lint-staged
:три: Деплой приложения на Github Pages (Инструкция)(Видео инструкция )
npm run build
добавить в package.json:
"homepage": "https://myusername.github.io/my-app", 
npm run build
npm install --save gh-pages
добавить в package.json:
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
npm run deploy