# modern angular template app
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

	  ng new modern-angular-template-app --standalone --inline-style --inline-template --skip-tests
    
## 1. NgRx & Angular Universal (express-engine): 
Manually install and add NgRx to app.config.ts because NgRx doesn't support standalone yet

    ❌ng add @ngrx/store@next
    ❌ng add @ngrx/effects@next
    ❌ng add @ngrx/store-devtools@next 
    ng add @nguniversal/express-engine@next

## 2. ChangeDetectionStrategy.OnPush
No flag when creating the project for now, but we can add it later

    ng g c components/abcxyz --change-detection OnPush


## 3. Environments setup
    ng generate environments
Sets up the environments files (without content), adds _fileReplacements_ to development build and server (Universal) config.
- Scripts in package.json:

      "serve:dev": "ng serve --c=development",
      "serve:prod": "ng serve --c=production",
      "build:dev": "ng build --c=development",
      "build:prod": "ng build --c=production"

## 4. ESlint & Prettier
    npm i --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
    npm i --save-dev prettier eslint-config-prettier prettier-plugin-tailwindcss -D
    (prettier-plugin-tailwindcss for automatic class sorting for consistency and efficiency)
- Scripts in package.json:

    "prettify": "npx prettier --write src",
    "lint": "eslint . --max-warnings 0 --report-unused-disable-directives",
    "lint:fix": "eslint . --fix",

## 5. Tailwindcss + Postcss + Autoprefixer [setup](https://tailwindcss.com/docs/installation)
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init
    ❔ npm i tailwind-scrollbar-hide
Add *styles.css*: 
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

## 4. Precommit Hooks with Husky & Lint-staged
    npm i husky lint-staged -D
    husky install
    npx husky add .husky/pre-commit "npx lint-staged --concurrent false"


lint-staged config for *prettier write* & *eslint --fix* in package.json:

    "lint-staged": {
        "src/**/*": [
        "prettier --write"
        ],
        "src/**/*.{js,jsx,ts,tsx}": [
        "eslint --fix"
        ]
    }




## Todo
- Branch ngrx & universal
