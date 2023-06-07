/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode
} from "@angular/core"
import { EffectsModule } from "@ngrx/effects"
import { StoreModule } from "@ngrx/store"
import { StoreDevtoolsModule } from "@ngrx/store-devtools"

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      StoreModule.forRoot({}, {}),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
      EffectsModule.forRoot([])
    )
  ]
}
