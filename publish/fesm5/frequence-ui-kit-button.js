import { ɵɵdefineInjectable, Injectable, Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonService = /** @class */ (function () {
    function ButtonService() {
    }
    ButtonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ButtonService.ctorParameters = function () { return []; };
    /** @nocollapse */ ButtonService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ButtonService_Factory() { return new ButtonService(); }, token: ButtonService, providedIn: "root" });
    return ButtonService;
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

export { ButtonComponent, ButtonModule, ButtonService };
//# sourceMappingURL=frequence-ui-kit-button.js.map
