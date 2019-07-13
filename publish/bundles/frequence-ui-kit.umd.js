(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('frequence-ui-kit', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['frequence-ui-kit'] = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonService = /** @class */ (function () {
        function ButtonService$1() {
        }
        ButtonService$1.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ButtonService$1.ctorParameters = function () { return []; };
        /** @nocollapse */ ButtonService$1.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ButtonService_Factory() { return new ButtonService(); }, token: ButtonService, providedIn: "root" });
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
            { type: core.Component, args: [{
                        selector: 'ui-button',
                        template: "\n    <p>\n      {{text}}\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () { return []; };
        ButtonComponent.propDecorators = {
            text: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
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
    var VERSION = new core.Version('1.0.0');

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
            { type: core.NgModule, args: [{
                        exports: [
                            ButtonModule
                        ]
                    },] }
        ];
        return FrequenceUiKitModule;
    }());

    exports.ButtonComponent = ButtonComponent;
    exports.ButtonModule = ButtonModule;
    exports.ButtonService = ButtonService;
    exports.FrequenceUiKitModule = FrequenceUiKitModule;
    exports.VERSION = VERSION;
    exports.ɵa = ButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=frequence-ui-kit.umd.js.map
