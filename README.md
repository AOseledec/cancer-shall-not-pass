# cancer-shell-not-pass

> Project for NKO &#34;РАКЛЕЧИТСЯ&#34;

[Макет](https://www.figma.com/file/BhM4jsOVCIx6cpCm6wQBQQ/РакЛечится-(Copy)?node-id=165%3A62)

В терменале перейдите в папку где будут храниться проекты(не нужно создавать папку под этот проект, она создасдится автоматически) и введите команду:
### git clone https://github.com/AOseledec/cancer-shall-not-pass.git
После клонирования проекта, перейдите в папку с проектом ипользуя команду терминала:
### cd cancer-shall-not-pass
Далее, перейдите в ветку 'dev' командой:
### git checkout dev
после создайте ветку с логином от гита и прейдите в нее командой(пример для мойе ветки):
### git checkout -b aoseledec

В начале вам понадобяться 2 команды:
### 1. git add .
### 2. git commit -m"коментарий"
Первая команда добавляет файл за которым необходимо следит, тслеживать изменнения
Вторая необходима что бы коммитить* изменения в файле, важно, желатьельно коммитить после важных шагов или выполненния задачи.
*сохранять изменения и создать контрольную точку
Пример: 
-создал файл, git add . git commit -m"создал файл.vue"
-сверстал структуру компонента хдер, git add . git commit -m"сверстал структуру компонента"
-компонент готов, git add . git commit -m"закончил верстку компонента"


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
