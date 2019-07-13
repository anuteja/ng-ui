(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('frequence-ui-kit/button', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['frequence-ui-kit'] = global['frequence-ui-kit'] || {}, global['frequence-ui-kit'].button = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonService = /** @class */ (function () {
        function ButtonService() {
        }
        ButtonService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ButtonService.ctorParameters = function () { return []; };
        /** @nocollapse */ ButtonService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ButtonService_Factory() { return new ButtonService(); }, token: ButtonService, providedIn: "root" });
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

    exports.ButtonComponent = ButtonComponent;
    exports.ButtonModule = ButtonModule;
    exports.ButtonService = ButtonService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=frequence-ui-kit-button.umd.js.map
