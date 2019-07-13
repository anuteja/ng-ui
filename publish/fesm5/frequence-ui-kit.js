import { ɵɵdefineInjectable, Injectable, Component, Input, NgModule, Version } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonService = /** @class */ (function () {
    function ButtonService$1() {
    }
    ButtonService$1.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ButtonService$1.ctorParameters = function () { return []; };
    /** @nocollapse */ ButtonService$1.ngInjectableDef = ɵɵdefineInjectable({ factory: function ButtonService_Factory() { return new ButtonService(); }, token: ButtonService, providedIn: "root" });
    return ButtonService$1;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ui-button',
                    template: "\n    <p>\n      {{text}}\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        text: [{ type: Input }]
    };
    return ButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ButtonComponent],
                    imports: [],
                    exports: [ButtonComponent]
                },] }
    ];
    return ButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var VERSION = new Version('1.0.0');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FrequenceUiKitModule = /** @class */ (function () {
    function FrequenceUiKitModule() {
    }
    /**
     * @deprecated Use `FrequenceUiKitModule` instead.
     */
    /**
     * @deprecated Use `FrequenceUiKitModule` instead.
     * @return {?}
     */
    FrequenceUiKitModule.forRoot = /**
     * @deprecated Use `FrequenceUiKitModule` instead.
     * @return {?}
     */
    function () {
        return {
            ngModule: FrequenceUiKitModule
        };
    };
    FrequenceUiKitModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        ButtonModule
                    ]
                },] }
    ];
    return FrequenceUiKitModule;
}());

export { ButtonComponent, ButtonModule, ButtonService, FrequenceUiKitModule, VERSION, ButtonModule as ɵa };
//# sourceMappingURL=frequence-ui-kit.js.map
