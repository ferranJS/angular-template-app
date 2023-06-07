# modern angular template app
A template project to create an up-to-date Angular app with scripts and environments setups, ESlint+Prettier with precommit hooks, Tailwind+PostCSS.

There are also branches for SSR with Angular Universal, NgRx (Redux) support, Firebase, etc.

>ng new modern-angular-template-app --standalone --inline-style --inline-template --skip-tests

## 1. ChangeDetectionStrategy.OnPush
There's still no flag when creating the project for now, but we can add it after project creation.

>ng g c components/abcxyz --change-detection OnPush

## 2. Environments setup
>ng generate environments

Sets up the environments files (without content), adds _fileReplacements_ to development build and Angular Universal config (in case you add it before).
- Scripts in package.json:

      "serve:dev": "ng serve --c=development",
      "serve:prod": "ng serve --c=production",
      "build:dev": "ng build --c=development",
      "build:prod": "ng build --c=production"

## 3. ESlint & Prettier
>npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin 

>npm i -D prettier eslint-config-prettier prettier-plugin-tailwindcss 

    (prettier-plugin-tailwindcss for automatic class sorting for consistency and efficiency)
- Scripts in package.json:

        "prettify": "npx prettier --write src",
        "lint": "eslint . --max-warnings 0 --report-unused-disable-directives",
        "lint:fix": "eslint . --fix",

## 4. Precommit Hooks with Husky & Lint-staged

>npm i husky lint-staged -D

>husky install

>npx husky add .husky/pre-commit "npx lint-staged --concurrent false"


lint-staged config for *prettier write* & *eslint --fix* in package.json:

    "lint-staged": {
        "src/**/*": [
        "prettier --write"
        ],
        "src/**/*.{js,jsx,ts,tsx}": [
        "eslint --fix"
        ]
    }

## 5. Tailwindcss + Postcss + Autoprefixer [setup](https://tailwindcss.com/docs/installation)
>npm install -D tailwindcss postcss autoprefixer

>npx tailwindcss init

>❔ npm i tailwind-scrollbar-hide
Add *styles.css*: 

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

## - NgRx branch: 
NgRx doesn't support standalone yet so manually install with npm:

>❌ng add @ngrx/store@next

>❌ng add @ngrx/effects@next

>❌ng add @ngrx/store-devtools@next 

And add NgRx to app.config.ts:

    importProvidersFrom(
      StoreModule.forRoot({}, {}),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
      EffectsModule.forRoot([])
    )

## - SSR branch (Angular Universal):
>ng add @nguniversal/express-engine@next

