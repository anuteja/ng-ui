import { Injectable, ɵɵdefineInjectable, Component, Input, NgModule, Version } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonService {
    constructor() { }
}
ButtonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ButtonService.ctorParameters = () => [];
/** @nocollapse */ ButtonService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ButtonService_Factory() { return new ButtonService(); }, token: ButtonService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'ui-button',
                template: `
    <p>
      {{text}}
    </p>
  `
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    text: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonModule {
}
ButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ButtonComponent],
                imports: [],
                exports: [ButtonComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const VERSION = new Version('1.0.0');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FrequenceUiKitModule {
    /**
     * @deprecated Use `FrequenceUiKitModule` instead.
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FrequenceUiKitModule
        };
    }
}
FrequenceUiKitModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    ButtonModule
                ]
            },] }
];

export { ButtonComponent, ButtonModule, ButtonService, FrequenceUiKitModule, VERSION, ButtonModule as ɵa };
//# sourceMappingURL=frequence-ui-kit.js.map
