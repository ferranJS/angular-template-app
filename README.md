# angular-base-app
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
