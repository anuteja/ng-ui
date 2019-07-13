(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    223: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var tslib_es6 = __webpack_require__(0),
        core = __webpack_require__(1);
      let ButtonService = class ButtonService {
        constructor() {}
      };
      ButtonService = tslib_es6.b([Object(core.Injectable)({ providedIn: 'root' })], ButtonService);
      let ButtonComponent = class ButtonComponent {
        constructor() {}
        ngOnInit() {}
      };
      tslib_es6.b([Object(core.Input)()], ButtonComponent.prototype, 'text', void 0),
        (ButtonComponent = tslib_es6.b(
          [
            Object(core.Component)({
              selector: 'ui-button',
              template: '\n    <p>\n      {{text}}\n    </p>\n  ',
              styles: []
            })
          ],
          ButtonComponent
        ));
      let ButtonModule = class ButtonModule {};
      (ButtonModule = tslib_es6.b(
        [Object(core.NgModule)({ declarations: [ButtonComponent], imports: [], exports: [ButtonComponent] })],
        ButtonModule
      )),
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return ButtonComponent;
        });
    },
    338: function(module, exports) {
      function webpackEmptyAsyncContext(req) {
        return Promise.resolve().then(function() {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        });
      }
      (webpackEmptyAsyncContext.keys = function() {
        return [];
      }),
        (webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext),
        (module.exports = webpackEmptyAsyncContext),
        (webpackEmptyAsyncContext.id = 338);
    },
    341: function(module, exports, __webpack_require__) {
      __webpack_require__(342), __webpack_require__(443), (module.exports = __webpack_require__(444));
    },
    444: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__(68),
            __webpack_require__(69),
            __webpack_require__(67),
            __webpack_require__(70),
            __webpack_require__(79);
          var _storybook_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(128),
            req = __webpack_require__(685);
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_5__.configure)(function loadStories() {
            req.keys().forEach(function(filename) {
              return req(filename);
            });
          }, module);
        }.call(this, __webpack_require__(256)(module));
    },
    685: function(module, exports, __webpack_require__) {
      var map = { './index.stories.ts': 686 };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 685);
    },
    686: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128),
            _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(340),
            _projects_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(223);
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)('Welcome', module).add(
            'to Storybook',
            () => ({ component: _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_1__.Welcome, props: {} })
          ),
            Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)('Button', module)
              .add('basic', () => ({
                component: _projects_button__WEBPACK_IMPORTED_MODULE_2__.a,
                props: { text: 'Hello Button' }
              }))
              .add('disabled', () => ({
                component: _projects_button__WEBPACK_IMPORTED_MODULE_2__.a,
                props: { text: 'I am disabled', disabled: !0 }
              }));
        }.call(this, __webpack_require__(256)(module));
    }
  },
  [[341, 1, 2]]
]);
//# sourceMappingURL=main.4fd98963d6e7ae282ba4.bundle.js.map
