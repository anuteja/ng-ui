import { ModuleWithProviders, NgModule } from '@angular/core';
import { ButtonModule } from './button';

export * from './button';
export * from './version';

@NgModule({
  exports: [ButtonModule]
})
export class FrequenceUiKitModule {
  /**
   * @deprecated Use `FrequenceUiKitModule` instead.
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FrequenceUiKitModule
    };
  }
}
