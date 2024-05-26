# Feature - Setup

## 1. Setup - Iniciando App com Angular

> cria o app dentro da pasta que já existe.

```sh
ng new tmf-angular-lab --directory=./ --routing --style=scss --ssr=false
```

<br>

---

<br>

## 2. Setup - Adicionando e configurando o Commits

> Instalando o Commitizen no projeto.

```sh
npm install commitizen -g
```

```sh
npm install commitizen --save-dev
```

> Inicializando o configurador do changelog.

```sh
commitizen init cz-conventional-changelog --save-dev --save-exact
```

> Adicionando Commitlint.

```sh
npm add @commitlint/config-conventional @commitlint/cli --save-dev
```

> Configurando Commitlint.

```sh
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```

> Adicionar o script no package.json.

<br>

---

<br>

## 3. Setup - Adicionando e configurando o Prettier

> Criando o .prettierignore

```sh
coverage
node_modules
dist
.angular
```

> Criando o .prettierrc

- arrowParens: sempre inclua parênteses. Exemplo:(x) => x
- bracketSpacing: espaçamento entre colchetes. Exemplo: { foo: bar }
- bracketSameLine: o fechamento da tag fica na mesma linha. Exemplo: <tag/>
- experimentalTernaries: utilize ternários curiosos, com o ponto de interrogação após a condição.

```sh
{
  "arrowParens": "always",
  "bracketSameLine": true,
  "bracketSpacing": true,
  "experimentalTernaries": true
}
```

> Adicionando o Prettier.

```sh
npm install prettier --save-dev --save-exact
```

> Adicionar scripts do prettier no package.json.

<br>

---

<br>

## 4. Setup - Adicionando eslint

> Instalando eslint

```sh
ng add @angular-eslint/schematics
```

<br>

---

<br>

## 5. Setup - Adicionando e configurando o Lint-staged

> Criando o .lintstagedrc

```sh
{
  "*.{js,ts,md,html,scss,json}": [
    "npm run prettier:write",
    "git add",
    "npm run prettier:check"
  ]
}
```

> Adicionando o Lint Staged.

```sh
npm install lint-staged --save-dev
```

<br>

---

<br>

## 5. Setup - Adicionando e configurando o Husky

> Adicionando o Husky.

```sh
npm install --save-dev husky
```

> Iniciando configuração do Husky.

```sh
npx husky init
```

> .husky/commit-msg

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no -- commitlint --edit ${1}
```

> .husky/pre-commit

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run pre-commit && npm run lint
```

> .husky/pre-push

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run pre-push
```

> Adicionar o script no package.json.

<br>

---

<br>

## 6. Setup - Adicionando e configurando o ghpages

> Instalando package para deploy do projeto no ghpages.

```sh
ng add angular-cli-ghpages
```

> Dar permição ao github actions - [Configurações > Actions](https://github.com/martins86/tmf-angular-lab/settings/actions)

<br>

> Adicionar o script no package.json.

<br>

---

<br>

## 7. Setup - Adicionando Angular Material

> Instalando Angular Material

```sh
ng add @angular/material
```

<br>

---

<br>

## Setup - Scripts no package

> Scripts do package.json

```sh
  "scripts": {
    "ng": "ng",
    "start": "ng serve --port=4200 --host=0.0.0.0 --disable-host-check --open",
    "build": "ng build --configuration production --output-hashing=none --optimization --aot",
    "build:ci": "npm run build -- --base-href=/.",
    "deploy:gh": "ng deploy --base-href=/tmf-angular-lab/",
    "watch": "ng build --watch --configuration development",
    "commit": "git-cz",
    "prettier:write": "npx prettier --write --ignore-unknown .",
    "prettier:check": "npx prettier --check .",
    "lint": "ng lint",
    "test": "ng test --code-coverage",
    "test:dev": "npm run test -- --progress --browsers Chrome",
    "test:ci": "npm run test -- --no-watch --no-progress --browsers ChromeHeadlessNoSandbox",
    "pre-commit": "npx --no-install lint-staged",
    "pre-push": "npm run test:ci",
    "prepare": "husky",
    "postinstall": "chmod ug+x .husky/*"
  },
```

<br>

---

<br>
<br>
<br>
<br>

# Feature - Aplication

## 1 - Iniciando Environments

```sh
ng generate environments
```

<br>

---

<br>

## 2 - Iniciando Layout

> cria o componente do template default.

```sh
ng generate component layout/default
```

> cria os componentes para o template default.

```sh
ng generate component layout/default/components/top-bar
```

```sh
ng generate component layout/default/components/left-bar
```

```sh
ng generate component layout/default/components/bottom-bar
```

> cria o componente do loading.

```sh
ng generate component layout/default/components/loading
```

<br>

---

<br>

## 3 - Iniciando Authentication

> cria as paginas de login, logout e registration.

```sh
ng generate component pages/authentication/login
```

```sh
ng generate component pages/authentication/logout
```

```sh
ng generate component pages/authentication/registration
```

<br>

---

<br>

## 4 - Iniciando Paginas padrão

> cria as paginas home e not found.

```sh
ng generate component pages/home
```

```sh
ng generate component pages/not-found
```

<br>

---

<br>
