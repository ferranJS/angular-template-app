# modern angular template app
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

	  ng new angular-base-app --standalone --inline-style --inline-template --skip-tests
    
## 1. NgRx & Angular Universal (express-engine): 
Manually install and add NgRx to app.config.ts because NgRx doesn't support standalone yet

    ❌ng add @ngrx/store@next
    ❌ng add @ngrx/effects@next
    ❌ng add @ngrx/store-devtools@next 
    ✔ ng add @nguniversal/express-engine@next

## 2. ChangeDetectionStrategy.OnPush
No flag when creating the project, but we can add it later

    ng g c components/abcxyz --change-detection OnPush


## 3. Environments setup
    ✔ ng generate environments
Sets up the environments files (without content), adds _fileReplacements_ to development build and server (Universal) config.
- Scripts in package.json:

      "serve:dev": "ng serve --c=development",
      "serve:prod": "ng serve --c=production",
      "build:dev": "ng build --c=development",
      "build:prod": "ng build --c=production"

## Todo
- ESlint with ts-standard (linter + formatter)
- Husky + Lint-staged (pre-commit git hooks)
- prettier? (needed for tailwindcss)
